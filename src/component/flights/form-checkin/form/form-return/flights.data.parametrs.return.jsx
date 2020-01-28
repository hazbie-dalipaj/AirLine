import React from 'react';
import SelectParam from '../../../../collection-flights/select.param';

const flightDataParameters = ['From', 'To', 'Departure', 'Return', 'Cabine', 'Price'];
const availableRoutesKeys = ['from', 'to', 'departure', 'retur', 'cabine', 'price']

const FlightDataParametersReturn = ({availableRoutes}) => (
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

export default FlightDataParametersReturn;