import React from 'react';
import Routes from './route.constant';
import { Route } from 'react-router-dom';
import FlightsPageOneWay from '../component/flights/form-checkin/form.oneway/flights.page.oneway';
import FlightsPageReturn from '../component/flights/form-checkin/form.return/flights.page.return';
import FlightsPageCard from '../component/card/flights.page.card';

const ViewComponent = ({ id, path, components }) => {
  const routesComponent = Routes.map((user, i) =>{
    return <Route key={i} id={Routes[i].id} exact path={Routes[i].path} components={Routes[i].components} render={({match}) => {
      const pathParams = {};
      Object.values(match.params).forEach((param)=>{
        const splitedParam = param.split(':');
        pathParams[splitedParam[0]] = splitedParam[1];           
      });
      return (
        <div>
          {
            Routes[i].id === 9
            ? <FlightsPageCard from={pathParams.from} to={pathParams.to} company={pathParams.company} />
            : components=Routes[i].components

            && Routes[i].id === 10
            ? <FlightsPageOneWay from={pathParams.from} to={pathParams.to} departure={pathParams.departure} cabine={pathParams.cabine} />
            : components=Routes[i].components

            && Routes[i].id === 11
            ? <FlightsPageReturn from={pathParams.from} to={pathParams.to} departure={pathParams.departure} retur={pathParams.retur} cabine={pathParams.cabine} />
            : components=Routes[i].components
          }
        </div>
      );
    }}/>
  })
  return(
    <div>
      { routesComponent }
    </div>
  )
}
export default ViewComponent;
