import { useState } from "react";
import {sortApplied, sortResultProps} from './types'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SortResults({sortHotels}:sortResultProps) {
    const [sort, setSort] = useState<sortApplied>('alphabetically');

    function changeSort(changeTo:sortApplied) {
        setSort(changeTo)
        sortHotels(changeTo)
    };

    return (
        <div className="sortResults">
            <Container>
                <Col>
                    <Row>
                        <button onClick={() => changeSort('alphabetically')}>sort <b>alphabetically</b></button>
                        {sort === 'alphabetically' ? 'yes' :'no'}
                    </Row>
                    <Row>
                        <button onClick={() => changeSort('price')}>sort by <b>price</b></button>
                    </Row>
                    <Row>
                        <button onClick={() => changeSort('rating')}>Sort by <b>star rating</b></button>
                    </Row>
                </Col>
            </Container>
        </div>
    )

};

export default SortResults;