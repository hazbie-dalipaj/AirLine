import React from 'react';
import './header.css'
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
  return(
    <div className='header'>
      <div className='options'>

      <Link className='option' to='/'>
          <button className='header-button'>Home Page</button>
          </Link>

        <Link className='option' to='/flights'>
          <button className='header-button'>Flights</button>
        </Link>

        <Link className='option' to='/test'>
          <button className='header-button'>Test</button>
        </Link>

        {currentUser ? (
		<div className='option' onClick={() => auth.signOut()}>
		<button className='header-button'>Sign Out</button>
		</div>
		):(		
          <Link className='option' to='/signin' >
            <button className='header-button'>Log in</button>
          </Link>
		)} 
          
      </div>
    </div>
  );}

export default Header;