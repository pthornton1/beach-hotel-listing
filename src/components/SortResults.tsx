import React from 'react';
import { useState } from "react";
import {sortApplied, sortResultProps} from '../types/types'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function SortResults({applyUserSort}:sortResultProps) {
    const [sort, setSort] = useState<sortApplied>('price');

    function changeSort(changeTo:sortApplied) {
        setSort(changeTo)
        applyUserSort(changeTo)
    };

    function styleButton(buttonType:sortApplied) {
        return {
            backgroundColor: sort === buttonType ? '#17317F' : 'white',
            color: sort === buttonType ? 'white' : '#17317F'
        }
      };

    return (
        <Container className='pb-4 pr-3'>
            <div className="d-grid gap-1">
                <Button variant='light' style={styleButton('alphabetically')} size="lg" onClick={() => changeSort('alphabetically')}>
                    sort <b>alphabetically</b> 🔤
                </Button>

                <Button variant='light' style={styleButton('price')} size="lg" onClick={() => changeSort('price')}>
                    sort by <b>price</b> 💵
                </Button>

                <Button variant='light' style={styleButton('rating')} size="lg" onClick={() => changeSort('rating')}>
                    Sort by <b>star rating</b> ⭐️
                </Button>
            </div>
        </Container>
    )

};

export default SortResults;