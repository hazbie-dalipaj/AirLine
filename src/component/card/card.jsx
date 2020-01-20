import React from 'react';
import './card.css';
import 'tachyons';
import './card.css';

const Card = (props) => {
    return(
        <div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5'>
        <>
            <h1>{props.name}</h1>
            <img className='imag' alt='' src={props.companyUrl} />
        </>
        </div>
    )
}
export default Card;