import React, {useState} from 'react';
import FLIGHTS_DATA from './flights_data';
import FlightsDataPreview from '../flights/form-checkin/form/form-oneway/flights-data-preview';
import './flights_page.scss';
import Column from '../copyright/column';

const FlightsPage = ({from, to, departure, cabine}) => {
    const [flightsData, useFlightsData] = useState(FLIGHTS_DATA);
    console.log('FLIGHTS DATA', from, to, departure, cabine)

    return(
        <>            
        <h4 className='title'>Choose the flights you want</h4>
        <h5><li style={{color: 'black'}}>Results:</li></h5>
            <>        
        {flightsData.map(({id, ...otherCollectionProps}) => (
                <FlightsDataPreview key={id} {...otherCollectionProps} from={from} to={to} departure={departure} cabine={cabine} />                
            ))}                    
        </>
        <div className='information2'>
            <Column />
        </div>
    </>
    )
}
export default FlightsPage;