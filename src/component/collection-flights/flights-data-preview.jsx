import React from 'react';
import './flights-data-preview.scss';
import {Link} from 'react-router-dom';

const flightDataParameters = ['From', 'To', 'Departure', 'Dep Time', 'Arrival', 'Arr Time', 'Cabine', 'Price'];
const availableRoutesKeys = ['from', 'to', 'departure', 'timed', 'arrival', 'timea', 'cabine', 'price']

const SelectParam = () => (
    <div>
        <span className='checkout-header'>Select</span>
        <Link to='/users-data'> &#10004;</Link>     
    </div>
);

const FlightDataParameters = ({availableRoutes}) => (
    <>
        {flightDataParameters.map((param, i) => {
            return (
                <div>
                    <span className='checkout-header'>{param}</span>
                    {availableRoutes.map((route) => {
                        return (
                        <div key={route.id}>{route[availableRoutesKeys[i]]}</div>
                    )})}
                </div>
            )
        })}
        <SelectParam />
    </>
)

const FlightsDataPreview = ({country, routes, from, to, depart, retur, cabine}) => {
    const availableRoutes = routes.filter((route, i) => route.from === from && route.to === to && route.cabine[i] == cabine);
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