import React from 'react';
import './flights-data-preview.scss';
import FlightDataParameters from './flights.data.parametrs';

const FlightsDataPreview = ({country, routes, from, to, departure, retur, cabine}) => {    
    const availableRoutes = routes.filter((route, i) => route.from === from && route.to === to && route.departure === departure && route.cabine[i] === cabine);
    console.log('availableRoutes', availableRoutes);

    return (
        availableRoutes.length > 0 
        ? <div className='checkout-page'>
            <div className='header'>
                <FlightDataParameters availableRoutes={availableRoutes} />
            </div>
        </div>       
        : null
    );
}
export default FlightsDataPreview;
