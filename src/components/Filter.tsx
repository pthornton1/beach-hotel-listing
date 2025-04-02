import React, { useState } from 'react';

export default function Filter ({applyFilter}:{applyFilter: (by:string|null, value:number|null) => void}) {
    const [input, setInput] = useState<number | string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setInput(value === '' ? '' : Number(value)); 
        }
    };

    function handleClick() {
        if (input !== '' ) {
            const passedValue:number = Number(input)
            applyFilter('price', passedValue)
        }
        if (input === '') applyFilter(null, null)
    }

    return <>
    <button onClick={handleClick}>Filter</button>
    <input type="number" value={input} onChange={handleChange}
    />
    </>
}
