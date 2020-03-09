import React from 'react';
import './page.flights.css';
import DirectoryMenu from '../directory.menu/directory.menu';
import FormCheckInReturnAndOneWay from './form-checkin/form.checkin.return.and.oneway';
import GoogleMap from '../google.map/google.map';

const PageFlights = () => {      
    return(
        <> 
            <div className='flights'>
                <FormCheckInReturnAndOneWay />
                <h1 className='title'>Countries to travel</h1>
                <DirectoryMenu />
                <h1 className='title'>See the map</h1>
                <GoogleMap />
            </div>                         
        </>           
    ) 
}
export default PageFlights;
