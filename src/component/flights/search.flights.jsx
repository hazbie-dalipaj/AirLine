import React from 'react';
import './search.flights.css';

const SearchFlights = ({searchfield, searchChange}) => {
    return(
        <div className='search'>
            <input type='search' placeholder='search country' onChange={searchChange} />
        </div>
    )
}
export default SearchFlights;