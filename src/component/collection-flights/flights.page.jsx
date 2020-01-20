import React, {useState} from 'react';
import FLIGHTS_DATA from './flights_data';
import FlightsDataPreview from './flights-data-preview';
import './flights_page.scss';

const FlightsPage = ({from, to, cabine}) => {
    const [flightsData, useFlightsData] = useState(FLIGHTS_DATA);
    console.log('FLIGHTS DATA', from, to, cabine)
    return(
    <>
        <h4 className='title'>Choose the flights you want</h4>
        <h5><li style={{color: 'black'}}>Results:</li></h5>
        <>        
        {flightsData.map(({id, ...otherCollectionProps}) => (
                <FlightsDataPreview key={id} {...otherCollectionProps} from={from} to={to} cabine={cabine} />                
            ))}        
            
        </>
    </>

    )
}
export default FlightsPage;