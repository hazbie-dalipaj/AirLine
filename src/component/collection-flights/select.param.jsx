import React from 'react';
import {Link} from 'react-router-dom';

const SelectParam = () => (
    <div>
        <span className='checkout-header'>Select</span>
        <Link to='/users-data'> &#10004;Select</Link>     
    </div>
);
export default SelectParam;
