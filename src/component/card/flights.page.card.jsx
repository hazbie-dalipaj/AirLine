import React, {useState} from 'react';
import FLIGHTS_DATA from '../collection-flights/flights_data';
import FlightsDataPreviewCard from './flights.data.preview.card';
import '../collection-flights/flights_page.scss'

const FlightsPageCard = ({from, to, company}) => {
    const [flightsData, useFlightsData] = useState(FLIGHTS_DATA);
    console.log('FLIGHTS DATA', from, to, company)
    return(
            <>            
        <h4 className='title'>Choose the flights you want</h4>
        <h5><li style={{color: 'black'}}>Results:</li></h5>
        <>        
        {flightsData.map(({id, ...otherCollectionProps}) => (
                <FlightsDataPreviewCard key={id} {...otherCollectionProps} from={from} to={to} company={company} />                
            ))}        
            
        </>
    </>
    )
}
export default FlightsPageCard;