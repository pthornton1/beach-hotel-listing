import React from 'react';
import { useEffect, useState } from "react";
import SortResults from "./SortResults";
import HotelResult from "./HotelResult";
import { DATA_API } from "../config/config";
import {Hotel, sortApplied} from '../types/types'
import sortHotels from './sortHotels';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function HotelResultList({url=DATA_API}:{url?:string}) {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [error, setError] = useState<string | null>(null);


    useEffect(() =>  {
        const fetchData = async() => {
            try {
                const response = await fetch(url);
    
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const data = await response.json();
                const sortedData = sortHotels(data);
                setHotels(sortedData);
            } catch (error) {
                setError('Error fetching hotels:' + (error instanceof Error ? error.message : 'Unknown error'));
                // Optionally set an error state to display to the user
                setHotels([]); // Clear hotels or display a fallback state
            }
        };
        fetchData();
        
    },[url]);


      
    function applyUserSort(by:sortApplied = 'alphabetically') {
        setHotels(sortHotels(hotels, by))
    }

    // handle error cases 
    if (error) {
        return <p>{error}</p>
    }
    
    return (
        <Container className="py-5">
            <Row> 
                <Col md={4} >
                    < SortResults applyUserSort={applyUserSort}/>
                </Col>
                <Col md={8} className="d-grid gap-1">
                    {hotels.map((hotel) => (
                    < HotelResult key={hotel.resort.id} hotel={hotel} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default HotelResultList;