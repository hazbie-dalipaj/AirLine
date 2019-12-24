import React from 'react';
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return(
    <div className='header'>
      <div className='options'>

        <Link className='option' to='/'>
          Home Page
          </Link>

        <Link className='option' to='/flights'>
          Flights
        </Link>

        <Link className='option' to='/contact'>
          Contact
        </Link>

          <Link className='option' to='/signin' >
            Sign In
          </Link>           
      </div>
    </div>
  );}
export default Header;