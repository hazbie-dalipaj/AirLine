import React from 'react';
import './header.css'
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import SvgIcon from '@material-ui/core/SvgIcon';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Header = ({currentUser}) => {
  return(
    <div className='header'>
      <div className='options'>

      <Link className='option' to='/'>
          <button className='header-button'><HomeIcon /> Home Page </button>
          </Link>

        <Link className='option' to='/flights'>
          <button className='header-button'><FlightTakeoffIcon/> Flights</button>
        </Link>

        <Link className='option' to='/request-rating'>
      <button className='header-button'><StarIcon/> Rating</button>
    </Link>

        {currentUser ? (
		<div className='option' onClick={() => auth.signOut()}>
		<button className='header-button'>Sign Out</button>
		</div>
		):(		
          <Link className='option' to='/signin' >
            <button className='header-button'><PersonIcon /> Log in</button>
          </Link>
		)} 
    
      </div>
    </div>
  );}

export default Header;