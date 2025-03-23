import { useEffect, useState } from "react";
import SortResults from "./SortResults";
import HotelResult from "./HotelResult";


function HotelResultList() {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        // To do: write async fetch of data and then call setHotels
    },[]);

    function sortHotels(by:string = 'alphabetically') {
        // To do: write sort function that sorts hotels and then calls setHotels
    };

    return (
        <div className="hotelResultList">
            < SortResults sortHotels={sortHotels}/>
            < HotelResult hotel={hotels}/>

        </div>
    );
};

export default HotelResultList;