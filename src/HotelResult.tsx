import { useState } from "react";
import { Hotel } from './types'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



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

    return (
        <div className="hotelResult" key={hotel.resort.id}>
            <Card bg='Light'>
            <Card.Body>
                <Row>
                    <Col xs={8}>
                        <img src={hotel.resort.image.url} alt={hotel.resort.image.description} />
                        <button onClick={toggleExpandDescription}>{expandDescription ? <><b>Read less</b> about this hotel 🔼</>: <><b>Read more</b> about this hotel 🔽</>}</button>
                    </Col>
                    <Col>
                        <ul>
                            <a href="">
                                <h2>{hotel.resort.name}</h2>
                            </a>
                            <p>{hotel.resort.regionName}, {hotel.resort.countryName}</p>
                            <p>{displayRating()}</p>
                            <p>{displayParty()}</p>

                            <p>{displayDate()} for <b>{hotel.bookingDetails.lengthOfStay} days</b></p>
                            <p>departing from <b>{hotel.flightDetails.departureAirport}</b></p>
                            <button>Book now<br/>{displayCost()}</button>
                        </ul>
                    </Col>  
                </Row> 
                <Row>            
                    <div>
                        {expandDescription ?  <><h3>Overview</h3><p>{hotel.resort.overview}</p></>: (<></>)}
                    </div>
                </Row> 
            </Card.Body>

            </Card>
        </div>
    )

}

export default HotelResult
