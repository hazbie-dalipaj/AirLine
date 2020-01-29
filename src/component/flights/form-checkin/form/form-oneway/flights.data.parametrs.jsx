import React from 'react';
import SelectParam from '../../../../collection-flights/select.param';

const flightDataParameters = ['From', 'To', 'Departure', 'Dep Time', 'Arrival', 'Arr Time', 'Cabine', 'Price'];
const availableRoutesKeys = ['from', 'to', 'departure', 'timed', 'arrival', 'timea', 'cabine', 'price']

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

export default FlightDataParameters;