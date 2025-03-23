import { useEffect, useState } from "react";
import SortResults from "./SortResults";
import HotelResult from "./HotelResult";
import { DATA_API } from "./config";
import {Hotel, sortApplied} from './types'


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
        <div className="hotelResultList">
            < SortResults sortHotels={sortHotels}/>
            {hotels.map((hotel) => (
             < HotelResult hotel={hotel} />
            ))}

        </div>
    );
};

export default HotelResultList;