import React from 'react';
import SelectParam from '../../../../collection-flights/select.param';

const flightDataParameters = ['From', 'To', 'Departure', 'Return', 'Cabine', 'Company', 'Price'];
const availableRoutesKeys = ['from', 'to', 'departure', 'retur', 'cabine', 'company', 'price']

const FlightDataParametersReturn = ({availableRoutes}) => (
    <>
        {flightDataParameters.map((param, i) => {
            return (
                <div key={i}>
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
