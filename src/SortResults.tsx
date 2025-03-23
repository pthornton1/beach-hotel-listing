import { useState } from "react";
import {sortApplied, sortResultProps} from './types'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function SortResults({applyUserSort}:sortResultProps) {
    const [sort, setSort] = useState<sortApplied>('alphabetically');

    function changeSort(changeTo:sortApplied) {
        setSort(changeTo)
        applyUserSort(changeTo)
    };

    return (
        <Container className='pb-4 pr-3'>
            <div className="d-grid gap-1">
                <Button variant={sort === 'alphabetically' ? 'primary' : 'secondary'} size="lg" onClick={() => changeSort('alphabetically')}>
                    sort <b>alphabetically</b> 🔤
                </Button>

                <Button variant={sort === 'price' ? 'primary' : 'secondary'} size="lg" onClick={() => changeSort('price')}>
                    sort by <b>price</b> 💵
                </Button>

                <Button variant={sort === 'rating' ? 'primary' : 'secondary'} size="lg" onClick={() => changeSort('rating')}>
                    Sort by <b>star rating</b> ⭐️
                </Button>
            </div>
        </Container>
    )

};

export default SortResults;