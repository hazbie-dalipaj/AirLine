import React, {useState} from 'react';
import './card.css';
import 'tachyons';
import './card.css';
import {Link} from 'react-router-dom';

const Card = ({name, companyUrl}) => {
    return(<Link to='/card-flights'>
            <div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5' >
                <>
                    <h1>{name}</h1>
                    <img className='imag' alt='' src={companyUrl} /><br></br>                             
                </>
            </div></Link> 
    )
}
export default Card;