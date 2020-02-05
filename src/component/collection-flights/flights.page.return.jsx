import React, {useState} from 'react';
import FLIGHTS_DATA from './flights_data';
import FlightsDataPreviewReturn from '../flights/form-checkin/form/form-return/flights.data.preview.return';
import './flights_page.scss';

const FlightsPageReturn = ({from, to, departure, retur, cabine}) => {
    const [flightsData, useFlightsData] = useState(FLIGHTS_DATA);
    console.log('FLIGHTS DATA', from, to, departure, retur, cabine)

    return(
         <>            
        <h4 className='title'>Choose the flights you want</h4>
        <h5><li style={{color: 'black'}}>Results:</li></h5>
            <>        
        {flightsData.map(({id, ...otherCollectionProps}) => (
                <FlightsDataPreviewReturn key={id} {...otherCollectionProps} from={from} to={to} departure={departure} retur={retur} cabine={cabine} />                
            ))}                    
            </>
        </>
    )
}
export default FlightsPageReturn;
