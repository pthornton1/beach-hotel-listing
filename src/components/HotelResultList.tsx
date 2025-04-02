import React, { useCallback } from 'react';
import { useEffect, useState, memo } from "react";
import SortResults from "./SortResults";
import HotelResult from "./HotelResult";
import { DATA_API } from "../config/config";
import {Hotel, sortApplied} from '../types/types';
import sortHotels from './sortHotels';
import Filter from './Filter';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MemoizedSortResults = memo(SortResults)
const MemoizedFilter = memo(Filter)


function HotelResultList({url=DATA_API}:{url?:string}) {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<{by:string | null, value:number | null} | null>(null);



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
                setHotels([]);
            }
        };
        fetchData();
        
    },[url]);


      
    const applyUserSort = useCallback((by:sortApplied = 'alphabetically') => {
        setHotels(sortHotels(hotels, by));
    }, [hotels]);

    const applyFilter = useCallback((by:string|null='price', value:number|null=200) : void =>  {
        if (by === null) {
            setFilter(null)
        }
        else {
            setFilter({by, value})
        }
    },[])

    let filteredHotels = hotels
    if (filter !== null) {
        const filterValue:number = filter.value === null ? 0 : filter.value;
        filteredHotels = hotels.filter((hotel) => {
        return hotel.bookingDetails.price.amount < filterValue
        })
    }

    // handle error cases 
    if (error) {
        return <p>{error}</p>
    };
    
    return (
        <Container className="py-5">
            <Row> 
                <MemoizedFilter applyFilter={applyFilter}/>
            </Row>

            <Row> 
                <Col md={4} >
                    < MemoizedSortResults applyUserSort={applyUserSort}/>
                </Col>
                <Col md={8} className="d-grid gap-1">

                    {filteredHotels.map((hotel) => (
                    < HotelResult key={hotel.resort.id} hotel={hotel} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default HotelResultList;