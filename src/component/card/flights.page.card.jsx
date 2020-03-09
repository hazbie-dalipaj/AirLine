import React, { useState } from 'react';
import FLIGHTS_DATA from '../flights/flights_data';
import FlightsDataPreview from '../flights/form-checkin/flights.data.forms/flights.data.preview';
import '../flights/form-checkin/form.oneway/flights.page.scss';

const FlightsPageCard = ({ from, to, company }) => {
    const [flightsData, useFlightsData] = useState(FLIGHTS_DATA);
    console.log('FLIGHTS DATA', from, to, company )
    return(
        <>            
            <h4 className='titleflight'>Choose the flights you want</h4>
            <h5><li style={{color: 'black', margin: '60px'}}>Results:</li></h5>
            <>        
                {flightsData.map(({id, ...otherCollectionProps}) => (
                    <FlightsDataPreview key={id} {...otherCollectionProps} from={from} to={to} company={company} />                
                ))}                    
            </>
        </>
    )
}
export default FlightsPageCard;
