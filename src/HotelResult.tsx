import { useState } from "react";
import { Hotel } from './types'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HotelResult({hotel}:{hotel:Hotel}) {
    const [expandDescription, setExpandDescription] = useState<boolean>(false)

    function toggleExpandDescription() {
        const currentState = expandDescription
        setExpandDescription(!currentState)
    }

    return (
        <div className="hotelResult" key={hotel.resort.id}>
            <Container>
            <Row>
                <Col xs={8}>
                    <img src={hotel.resort.image.url} alt={hotel.resort.image.description} />
                    <button onClick={toggleExpandDescription}>Read more about this hotel</button>
                </Col>
                <Col>
                <ul>
                    <a href="">
                        <h2>{hotel.resort.name}</h2>
                    </a>
                    <p>{hotel.resort.regionName},{hotel.resort.countryName}</p>
                    <p>{hotel.resort.starRating}</p>
                    <p><b>{hotel.bookingDetails.party.adults}</b> Adults
                    {hotel.bookingDetails.party.children ?  <>, <b>{hotel.bookingDetails.party.children}</b> children</>: (<></>)}
                    {hotel.bookingDetails.party.infants ?  <> & <b>{hotel.bookingDetails.party.infants}</b> infants</>: (<></>)}
                    </p>

                    <p>{hotel.flightDetails.departureDate} for {hotel.bookingDetails.lengthOfStay}</p>
                    <p>departing from <b>{hotel.flightDetails.departureAirport}</b></p>
                    <button>Book now<br/>{hotel.bookingDetails.price.currency} {hotel.bookingDetails.price.amount}</button>
                </ul>
                </Col>  
            </Row> 
            <Row>            
                <div>
                {expandDescription ?  <><h3>Overview</h3><p>{hotel.resort.overview}</p></>: (<></>)}
            </div>
            </Row> 
            </Container>

        </div>
    )

}

export default HotelResult
