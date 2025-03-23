import { useEffect, useState } from "react";
import SortResults from "./SortResults";
import HotelResult from "./HotelResult";
import { DATA_API } from "./config";
import {Hotel, sortApplied} from './types'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function HotelResultList() {
    const [hotels, setHotels] = useState<Hotel[]>([]);

    useEffect(() =>  {
        const fetchData = async() => {
            const response = await fetch(DATA_API);
            const data = await response.json();
            setHotels(data)
            applyUserSort()
        }
        fetchData();
        
    },[]);


    function sortHotels(hotelList: Hotel[], by:sortApplied = 'alphabetically'):Hotel[] {
        // To do: write sort function that sorts hotels and then calls setHotels
        const updatedHotels = [...hotels]
        if (by==='price') {
            updatedHotels.sort((a,b) => {
                return b.bookingDetails.price.amount - a.bookingDetails.price.amount
            })
        }
        if (by==='rating') {
            updatedHotels.sort((a,b) => {
                return b.resort.starRating - a.resort.starRating 
            })
        }
        if (by==='alphabetically') {
            updatedHotels.sort((a,b) => {
                const nameA = a.resort.name.toLowerCase()
                const nameB = b.resort.name.toLowerCase()

                if (nameA < nameB) return -1
                if (nameA > nameB) return 1
                return 0
            })
        }
        return updatedHotels;
    };
      
    function applyUserSort(by:sortApplied = 'alphabetically') {
        setHotels(sortHotels(hotels, by))
    }

    return (
        <Container className="py-5">
            <Row> 
                <Col md={3}>
                    < SortResults applyUserSort={applyUserSort}/>
                </Col>
                <Col md={9} className="d-grid gap-1">
                    {hotels.map((hotel) => (
                    < HotelResult hotel={hotel} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default HotelResultList;