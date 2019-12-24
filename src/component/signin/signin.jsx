import React, {Component} from 'react';
import './signin.css';
import {Link} from 'react-router-dom';


class Signin extends Component{
    render(){
        return(
            <div>
                <div className='cent'>
                   <h2 >Sign In</h2>
                    <span >Sign in with your email and password </span> 
                </div>
                <br /> <br />
            <form className='bord'>
                <div className='imgcontainer'>
                    <img className='avantar' alt='' src='https://bgp-palembang.com/assets/img/avatar/avatar-2.png'  />
                </div>
                <div className='container'>
                    <label>Email</label>
                    <input type='text' placeholder='enter your email' name='email' required />
                    <br /><br/>
                    <label>Password</label>
                    <input type='password' placeholder='enter your password' name='password' required />
                    <br /><br />
                    <button type="submit"><Link to='/checkin'>Login</Link></button>
                    <span>Don't have an account? Click <Link to='/register'>here</Link></span>
                </div>
            </form>
            </div>            
        )
    }
}
export default Signin;