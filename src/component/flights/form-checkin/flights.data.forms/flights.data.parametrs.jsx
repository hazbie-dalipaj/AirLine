import React from 'react';
import SelectParam from './select.param';
import Routes from '../../../../route.component/route.constant';
import { Route } from 'react-router-dom';
import './flights.data.preview.scss';

const FlightDataParameters = ({ availableRoutes, id, path }) => {
    const flightsParameters = Routes.map((user, k) => {
        return <Route key={k} id={Routes[k].id} path={Routes[k].path} render={({match}) => {
            const flightDataParameters = ['From', 'To', 'Departure',  Routes[k].id === 11 || Routes[k].id === 9 ? 'Return':'Arrival', 'Cabine', 'Company', 'Price'];
            const availableRoutesKeys = ['from', 'to', 'departure',Routes[k].id === 11 || Routes[k].id === 9 ? 'retur' :'arrival', 'cabine', 'company', 'price'];
            return (
                <> {
                    Routes[k].id === 11 || Routes[k].id === 9 || Routes[k].id === 10 || Routes[k].id === 12
                    ? flightDataParameters.map((param, i) =>{
                        return(
                            <div key={i} className='checkout-header'>
                                <span>{param}</span>
                                {availableRoutes.map((route) => {
                                    return ( <div key={route.id}>{route[availableRoutesKeys[i]]} </div> )
                                })}
                            </div>
                        )
                    }): null
                } </>
            )
        }} />
    })
    return( <div>{flightsParameters} <SelectParam /></div> )
}
export default FlightDataParameters;
