import React from 'react';
import './header.css'

const Header = () => {
  return(
    <div className='header'>
      <div className='options'>
        <div className='option'>
          FLIGHTS
        </div>
        <div className='option'>
          CONTACT
        </div>
          <div className='option' to='/signin'>
            SIGN IN
          </div>           
      </div>
    </div>
  );}
export default Header;
