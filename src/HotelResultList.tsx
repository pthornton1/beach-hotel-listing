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
            // const hotels = [... data]
            setHotels(data)
        }
        fetchData();
    },[]);

    function sortHotels(by:sortApplied = 'alphabetically') {
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
        setHotels(updatedHotels)
    };

    return (
        <Container className="pt-5">
            <Row> 
                <Col sm={3}>
                    < SortResults sortHotels={sortHotels}/>
                </Col>
                <Col>
                    {hotels.map((hotel) => (
                    < HotelResult hotel={hotel} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default HotelResultList;