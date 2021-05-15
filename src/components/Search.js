import React from 'react';

const Search = ({id,value,onChange,type,placeholder}) => {
    return (
        <>
            {/* <label htmlFor={id}>{children}</label>&nbsp; */}
            <input
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
