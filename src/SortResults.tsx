import { useState } from "react";
import {sortApplied, sortResultProps} from './types'


function SortResults({sortHotels}:sortResultProps) {
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