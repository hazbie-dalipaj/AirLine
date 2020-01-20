import React from 'react';
import './register.css';
import {Link} from 'react-router-dom'
import FormInput from '../form-input/form.input';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class Register extends React.Component{
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
		try{
			const {user} = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, {name});
            await createUserProfileDocument(user, {surname});
            await createUserProfileDocument(user, {username});
			
			this.setState(
				{
            name:'',
            surname:'',
            username:'',
            email:'',
            password:'',
            repassword:''
        }
			)
		}catch(error){
			console.error(error);
		}
    }
	
	handleChange = event => {
  const {value, name } = event.target;
  this.setState({ [name]: value })
  }
    render(){
        return(
            <>
                <div className='cent'>
                   <h2 >Register</h2>
                    <span >Please fill in this form to create an account.</span> 
                </div>
                <br /> <br />
            <form className='bord' onSubmit={this.handleSubmit}>
                <div className='container'>
                    <label>First Name</label>
                    <FormInput type='text' placeholder='enter your name' name='name' value={this.state.name} onChange={this.handleChange} required />
                    <br /><br/>

                    <label>Last Name</label>
                    <FormInput type='text' placeholder='enter your surname' name='surname' value={this.state.surname} onChange={this.handleChange} required />
                    <br /><br/>

                    <label>Username</label>
                    <FormInput type='text' placeholder='enter your username' name='username' value={this.state.username} onChange={this.handleChange} required />
                    <br /><br/>

                    <label>Email</label>
                    <FormInput type='email' placeholder='enter your email' name='email' value={this.state.email} onChange={this.handleChange} required />
                    <br /><br/>

                    <label>Password</label>
                    <FormInput type='password' placeholder='enter your password' name='password' value={this.state.password} onChange={this.handleChange} required />
                    <br /><br />

                    <label>Re-Password</label>
                    <FormInput type='password' placeholder='enter your password' name='repassword' value={this.state.repassword} onChange={this.handleChange} required />

                    <button type="submit">Register</button>

                    <span>Have an account? Click <Link to='/signin'>here</Link></span>
                </div>
            </form>
            </>     
        )
    }
}
export default Register;