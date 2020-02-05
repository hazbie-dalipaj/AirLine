import React from 'react';
import '../flights/form-checkin/form/form-oneway/flights-data-preview.scss'
import FlightDataParametersCard from './flights.data.parametrs.card';

const FlightsDataPreviewCard = ({country, routes, from, to, company}) => {
    
    const availableRoutes = routes.filter((route, i) => route.from === from && route.to === to && route.company === company);
    console.log('availableRoutes', availableRoutes);

    return (
        availableRoutes.length > 0 
        ? <div className='checkout-page'>
            <div className='header'>
                <FlightDataParametersCard availableRoutes={availableRoutes} />
            </div>
        </div>       
    : null
);
}
export default FlightsDataPreviewCard;
