import { useState } from "react";
import { Hotel } from './types'

function HotelResult({hotel}:{hotel:Hotel}) {
    const [expandDescription, setExpandDescription] = useState<boolean>(false)

    function toggleExpandDescription() {
        const currentState = expandDescription
        setExpandDescription(!currentState)
    }

    return (
        <div className="hotelResult">
            <ul>
                <h1></h1> 
                <li>Placeholder</li>
                <li>{hotel.resort.countryName}</li>
                <button onClick={toggleExpandDescription}>Expand Description</button>
            </ul>
            
        </div>
    )

}

export default HotelResult
