import { useEffect, useState } from "react";
import SortResults from "./SortResults";
import HotelResult from "./HotelResult";
import { DATA_API } from "./config";


function HotelResultList() {
    const [hotels, setHotels] = useState([]);

    useEffect(() =>  {
        const fetchData = async() => {
            const response = await fetch(DATA_API);
            const data = await response.json();
            setHotels(data)
        }
        fetchData();
    },[]);

    function sortHotels(by:string = 'alphabetically') {
        // To do: write sort function that sorts hotels and then calls setHotels
    };

    return (
        <div className="hotelResultList">
            < SortResults sortHotels={sortHotels}/>
            {/* < HotelResult hotel={hotels}/> */}

        </div>
    );
};

export default HotelResultList;