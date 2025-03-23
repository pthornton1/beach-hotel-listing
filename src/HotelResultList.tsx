import { useEffect, useState } from "react";

function HotelResultList() {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        // To do: write async fetch of data and then call setHotels
    },[]);

    function sortHotels(by:string = 'alphabetically') {
        // To do: write sort function that sorts hotels and then calls setHotels
    }

    return (
        <div className="hotelResultList">
            

        </div>
    )
};