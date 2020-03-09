import React, { useState } from 'react';
import FLIGHTS_DATA from '../../flights_data';
import FlightsDataPreview from '../flights.data.forms/flights.data.preview';
import '../form.oneway/flights.page.scss';

const FlightsPageReturn = ({from, to, departure, retur, cabine}) => {
    const [flightsData, useFlightsData] = useState(FLIGHTS_DATA);
    console.log('FLIGHTS DATA', from, to, departure, retur, cabine)
    return(
        <>            
            <h4 className='titleflight'>Choose the flights you want</h4>
            <h5><li style={{color: 'black', margin: '60px'}}>Results:</li></h5>
            <>        
                {flightsData.map(({id, ...otherCollectionProps}) => (
                    <FlightsDataPreview key={id} {...otherCollectionProps} from={from} to={to} departure={departure} retur={retur} cabine={cabine} />              
                ))}                
            </>
        </>
    )
}
export default FlightsPageReturn;
