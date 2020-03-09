import React from 'react';
import RouteHeader from './route.header';
import { Route, Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './view.header.css';

const ViewHeader = ({ id, path, icon, name, currentUser }) => {
    const routesHeader = RouteHeader.map((user, i) => {
        return <Route key={i} id={RouteHeader[i].id} exact path={RouteHeader[i].path} icon={RouteHeader[i].icon} name={RouteHeader[i].name} render={() => {
            return(
                <div>
                    <Link to={path=RouteHeader[0].path}><button className='br3 hButton'>{icon=RouteHeader[0].icon} {name=RouteHeader[0].name}</button></Link>
                    <Link to={path=RouteHeader[1].path}><button className='br3 hButton'>{icon=RouteHeader[1].icon} {name=RouteHeader[1].name}</button></Link>
                    <Link to={path=RouteHeader[2].path}><button className='br3 hButton'>{icon=RouteHeader[2].icon} {name=RouteHeader[2].name}</button></Link>
                    {currentUser ? 
		                <div onClick={() => auth.signOut()}>
		                    <button className='br3 signoutButton'>{icon=RouteHeader[4].icon} {name=RouteHeader[4].name}</button>
		                </div>
		            :
                    <Link to={path=RouteHeader[3].path}><button className='br3 hButton'>{icon=RouteHeader[3].icon} {name=RouteHeader[3].name}</button></Link>
                    }
                </div>
            )
        }} />
    })
    return( <div className='header'>{ routesHeader }</div> )
}
export default ViewHeader;
