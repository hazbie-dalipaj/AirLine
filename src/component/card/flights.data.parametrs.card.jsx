import React from 'react';
import SelectParam from '../collection-flights/select.param';

const flightDataParameters = ['Company', 'From', 'To', 'Departure', 'Return', 'Price'];
const availableRoutesKeys = ['company', 'from', 'to', 'departure', 'retur', 'price']

const FlightDataParametersCard = ({availableRoutes}) => (
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

export default FlightDataParametersCard;