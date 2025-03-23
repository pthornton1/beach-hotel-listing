import { useState } from "react";
import {sortApplied, sortResultProps} from './types'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function SortResults({sortHotels}:sortResultProps) {
    const [sort, setSort] = useState<sortApplied>('alphabetically');

    function changeSort(changeTo:sortApplied) {
        setSort(changeTo)
        sortHotels(changeTo)
    };

    return (
        // <div className="d-grid gap-2">
        //     <Container>
        //         <Col>
        //             <Row>
        //                 <Button variant={sort === 'alphabetically' ? 'primary' : 'secondary'} size="lg" onClick={() => changeSort('alphabetically')}>
        //                     sort <b>alphabetically</b> 🔤
        //                 </Button>
        //             </Row>
        //             <Row>
        //                 <Button variant={sort === 'price' ? 'primary' : 'secondary'} size="lg" onClick={() => changeSort('price')}>
        //                     sort by <b>price</b> 💵
        //                 </Button>
        //             </Row>
        //             <Row>
        //                 <Button variant={sort === 'rating' ? 'primary' : 'secondary'} size="lg" onClick={() => changeSort('rating')}>
        //                     Sort by <b>star rating</b> ⭐️
        //                 </Button>
        //             </Row>
        //         </Col>
        //     </Container>
        // </div>

<Container className='pb-4'>
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