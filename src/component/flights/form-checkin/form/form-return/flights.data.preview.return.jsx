import React from 'react';
import '../form-oneway/flights-data-preview.scss';
import FlightDataParametersReturn from './flights.data.parametrs.return';

const FlightsDataPreviewReturn = ({routes, from, to, departure, retur,  cabine}) => {   
    const availableRoutes = routes.filter((route, i) => route.from === from && route.to === to && route.departure === departure && route.retur === retur  && route.cabine[i] === cabine);
    console.log('availableRoutes', availableRoutes);

    return (
        availableRoutes.length > 0 
        ? <div className='checkout-page'>
            <div className='header'>
                <FlightDataParametersReturn availableRoutes={availableRoutes} />
            </div>
        </div>       
        : null
    );
}
export default FlightsDataPreviewReturn;
