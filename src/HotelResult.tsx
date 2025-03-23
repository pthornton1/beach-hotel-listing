import { useEffect, useState } from "react";

function HotelResult(hotel:any) {
    const [expandDescription, setExpandDescription] = useState<boolean>(false)

    function toggleExpandDescription() {
        const currentState = expandDescription
        return setExpandDescription(!currentState)
    }

    return (
        <div className="hotelResult">
            <ul>   
                {/* Loop through attributes and show to user */}
                <li>Placeholder</li>
                <li>{hotel}</li>
            </ul>
            <button onClick={toggleExpandDescription}>Expand Description</button>
        </div>
    )

}
