import React from 'react';
import './Search.scss';

const Search = ({id,value,onChange,type,placeholder}) => {
    return (
        <>
            <input
            className='search'
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            />
        </>
    )
}

export default Search;
