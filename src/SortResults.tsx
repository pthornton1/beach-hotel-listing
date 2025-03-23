import { useState } from "react";

type sortApplied = "alphabetically" | "price" | "rating";
type props = {
    sortHotels: (by:sortApplied) => void;
  };

function SortResults({sortHotels}:props) {
    const [sort, setSort] = useState<sortApplied>('alphabetically');

    function changeSort(changeTo:sortApplied) {
        setSort(changeTo)
        sortHotels(changeTo)
    };

    return (
        <div className="sortResults">
            <button onClick={() => changeSort('price')}>Sort by Price</button>
        </div>
    )

};

export default SortResults;