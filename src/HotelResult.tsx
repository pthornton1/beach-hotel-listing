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
                {/* Loop through attributes and show to user */}
                <li>Placeholder</li>
                <li>{hotel.resort.countryName}</li>
            </ul>
            <button onClick={toggleExpandDescription}>Expand Description</button>
        </div>
    )

}

export default HotelResult
