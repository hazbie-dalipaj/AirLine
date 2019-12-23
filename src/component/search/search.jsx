import React from 'react';
import './search.css';

const Search = ({searchfield, searchChange}) => {
    return(
        <div className='search'>
            <input type='search' placeholder='search company' onChange={searchChange} />
        </div>
    )
}
export default Search;