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
    };

    return (
        <Container>
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