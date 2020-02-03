import React from 'react';
import {Link} from 'react-router-dom';
import './request.rating.css'

const RequestRating = () => {
    return(
        <div className='request-rating'>
            To rate the app please <Link to='/signin'>login</Link> or <Link to='/register'>register</Link>
         </div>
    )
}
export default RequestRating;