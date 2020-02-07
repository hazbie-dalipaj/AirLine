import React from 'react';
import {Link} from 'react-router-dom';
import './request.rating.css'
import Column from '../copyright/column';
//import translate from 'google-translate-api'
//const translate = require('google-translate-api');

const RequestRating = () => {
    return(
        <>
        <div className='request-rating'>
            To rate the app please <Link to='/signin'>login</Link> or <Link to='/register'>register</Link>
         </div>
         <div className='information2'>
             <Column />
         </div>
         </>
    )
}
export default RequestRating;
