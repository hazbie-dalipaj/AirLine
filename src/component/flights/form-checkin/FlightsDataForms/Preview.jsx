import React from 'react';
import FLIGHTS_DATA from '../../flights_data';
import './Preview.scss';
import Parameters from './Parametrs';
import SelectParam from './select.param';

const Preview = ({ from, to, departure, company, returnTime, cabine }) => {
    let availableRoutes = [];
    for (const flight of FLIGHTS_DATA) {
        const routes = flight.routes;
        for (const route of routes) {
            if (
                route.returnTime == returnTime
                || route.departure === departure
                || (route.from === from && route.to === to)
            ) {
                availableRoutes.push(route);
            }
        }
    }

    console.log('availableRoutes', availableRoutes);
    console.log('props', FLIGHTS_DATA, from, to, departure, returnTime, cabine, company);
    return (
        availableRoutes.length > 0
            ? <div className='checkout-page'>
                <div className='header'>
                    <Parameters
                        availableRoutes={availableRoutes}
                        from={from}
                        to={to}
                        departure={departure}
                        returnTime={returnTime}
                        company={company}
                        cabine={cabine}
                    />
                    <SelectParam />
                </div>
            </div>
            : null 
    );
}
export default Preview;
