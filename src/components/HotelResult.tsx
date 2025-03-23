import React from 'react';
import { useState } from "react";
import { Hotel } from '../types/types'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';



function HotelResult({hotel}:{hotel:Hotel}) {
    const [expandDescription, setExpandDescription] = useState<boolean>(false);

    function toggleExpandDescription() {
        const currentState = expandDescription;
        setExpandDescription(!currentState);
    };

    function displayDate() {
        const date = new Date(hotel.flightDetails.departureDate);

        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
      
        const getOrdinal = (day: number) => {
            const lastDigit = day % 10;
          
            if (day >= 11 && day <= 13) {
              return 'th';
            }
          
            switch (lastDigit) {
              case 1:
                return 'st';
              case 2:
                return 'nd';
              case 3:
                return 'rd';
              default:
                return 'th';
            }
        };

        const dateString = `${day}${getOrdinal(day)} ${month} ${year}`
        return <>{dateString}</>
    
    }

    function displayParty() {
        const adultJSX =  <><b>{hotel.bookingDetails.party.adults}</b> 
                            {hotel.bookingDetails.party.adults === 1 ? <> adult</> : <> adults</> }</>
        

        let childJSX = <></>
            if (hotel.bookingDetails.party.children !== undefined) {
                childJSX = (
                    <>, <b>{hotel.bookingDetails.party.children}</b> 
                    {hotel.bookingDetails.party.children === 1 ? <> child</> : <> children</> }</>
                )}
            

        let infantJSX = <></>
            if (hotel.bookingDetails.party.infants === undefined) {
                infantJSX = (
                    <> & <b>{hotel.bookingDetails.party.infants}</b> 
                    {hotel.bookingDetails.party.infants === 1 ? <> infant</> : <> infants</> }</>
            ) }

        return <>{adultJSX}{childJSX}{infantJSX}</>        
    }

    function displayCost() {
        const currencyLookUp: { [key: string]: string } = {
            GBP: '£',
            USD: '$',
            EUR: '€'
          };
          
          const currency = hotel.bookingDetails.price.currency;
          const symbol = currencyLookUp[currency] || currency; // fallback to showing 'GBP', etc.
          const amountString = hotel.bookingDetails.price.amount.toLocaleString('en-US', {minimumFractionDigits:2,maximumFractionDigits:2});
        return <>{symbol}{amountString}</> 
    }

    function displayRating() {
        const rating = hotel.resort.starRating
        const ratingLookUp: { [key: number]: string } = {
            1: '⭐️',
            2: '⭐️⭐️',
            3: '⭐️⭐️⭐️',
            4: '⭐️⭐️⭐️⭐️',
            5: '⭐️⭐️⭐️⭐️⭐️'
          };
        const ratingString = ratingLookUp[rating]
        return <>{ratingString}</>
    }

//     <div class="card mb-3" style="max-width: 540px;">
//   <div class="row no-gutters">
//     <div class="col-md-4">
//       <img src="..." class="card-img" alt="...">
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//   </div>
// </div>
    return (
        <div className="hotelResult" key={hotel.resort.id}>
                <Card bg='Light' className="p-0" style={{border:0}}>
                <Card.Body className="p-0">
                    <Row>
                        <Col lg={7}>
                            <Card.Img src={hotel.resort.image.url} /> 
                        </Col>
                        <Col lg={5}>
                            <Container className="pt-2 pr-3">
                                <Card.Title className="pt-2" style={{color:'#17317F'}}>
                                    {hotel.resort.name}
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {hotel.resort.regionName}, {hotel.resort.countryName}
                                    </Card.Subtitle>
                                <Card.Text className="my-2">
                                    {displayRating()}
                                </Card.Text>
                                <Card.Text className="my-0">
                                    {displayParty()}
                                </Card.Text>
                                <Card.Text className="my-0">
                                    {displayDate()} for <b>{hotel.bookingDetails.lengthOfStay} days</b>
                                </Card.Text>
                                <Card.Text className="my-0">
                                    departing from <b>{hotel.flightDetails.departureAirport}</b>
                                </Card.Text>
                                    <Button className="my-3 w-100 pb-0" style={{backgroundColor:'#FEDC07', border:0, color:'#17317F'}} size="lg">
                                        <h6 className="my-0">Book now</h6>
                                        <h3>{displayCost()}</h3>
                                    </Button>       
                            </Container>
                        </Col>  
                    </Row> 
                    <Row className="pt-0">            
                        <Accordion className="m-0" flush={false}>
                            <Accordion.Item eventKey="0" onClick={toggleExpandDescription} style={{ border:0}}>
                                <Accordion.Header style={{whiteSpace:'pre-wrap'}}>
                                    {expandDescription ? <><b>Read less</b> about this hotel</>: <><b>Read more</b> about this hotel</>}
                                </Accordion.Header>
                                <Accordion.Body>
                                    {hotel.resort.overview}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row> 
                </Card.Body>
                </Card>
        </div>
    )

}

export default HotelResult
