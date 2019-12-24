import React, {Component} from 'react';
import './register.css';
import {Link} from 'react-router-dom'

class Register extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            surname:'',
            username:'',
            email:'',
            password:'',
            repassword:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
    
        const { name, surname, username, email, password, repassword } = this.state;
    
        if (password !== repassword) {
          alert("passwords don't match");
          return;
        }
    }
    render(){
        return(
            <div>
                <div className='cent'>
                   <h2 >Register</h2>
                    <span >Please fill in this form to create an account.</span> 
                </div>
                <br /> <br />
            <form className='bord'>
                <div className='container'>
                    <label>First Name</label>
                    <input type='text' placeholder='enter your name' name='name' required />
                    <br /><br/>

                    <label>Last Name</label>
                    <input type='text' placeholder='enter your surname' name='surname' required />
                    <br /><br/>

                    <label>Username</label>
                    <input type='text' placeholder='enter your username' name='username' required />
                    <br /><br/>

                    <label>Email</label>
                    <input type='text' placeholder='enter your email' name='email' required />
                    <br /><br/>

                    <label>Password</label>
                    <input type='password' placeholder='enter your password' name='password' required />
                    <br /><br />

                    <label>Re-Password</label>
                    <input type='password' placeholder='enter your password' name='repassword' required />
                    
                    <button type="submit">Register</button>

                    <span>Have an account? Click <Link to='/signin'>here</Link></span>
                </div>
            </form>
            </div>     
        )
    }
}
export default Register;