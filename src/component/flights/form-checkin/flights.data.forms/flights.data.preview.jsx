import React from 'react';
import './flights.data.preview.scss';
import FlightDataParameters from './flights.data.parametrs';

const FlightsDataPreview = ({routes, from, to, departure, retur,  cabine}) => {   
    const availableRoutes = routes.filter((route, i) => 
    route.retur === retur ? route.departure === departure && route.cabine[i] === cabine : route.from === from  && route.to === to);
    console.log('availableRoutes', availableRoutes);
    return (
        availableRoutes.length > 0
        ? <div className='checkout-page'>
            <div className='header'>
                <FlightDataParameters availableRoutes = {availableRoutes} />
            </div>
        </div>       
        : null
    );
}
export default FlightsDataPreview;
