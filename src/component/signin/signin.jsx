import React, {Component} from 'react';
import './signin.css';
import {Link} from 'react-router-dom';
import FormInput from '../form-input/form.input';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class Signin extends Component{
    constructor(props){
        super()
        this.state={
          email:'',
          password:''
        }
      }
      handleSubmit = async event => {
        event.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});
        }catch(error){
            console.log(error);
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
                   <h2 >Sign In</h2>
                    <span >Sign in with your email and password </span> 
                </div>
                <br /> <br />
                <form className='bord' onSubmit={this.handleSubmit}>
                <div className='imgcontainer'>
                    <img className='avantar' alt='' src='https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png'  />
                </div>
                <div className='container'>
                    <label>Email</label>
                    <FormInput type='text' placeholder='enter your email' name='email' value={this.state.email} onChange={this.handleChange} required />
                    <br /><br/>
                    <label>Password</label>
                    <FormInput type='password' placeholder='enter your password' name='password' value={this.state.password} onChange={this.handleChange} required />
                    <br /><br />
                    <button type="submit">Login</button>
                    <br /><br />
                    <span className='spn'>or continue with</span>
                    <br /><br />

                        <Link to='/'><img className='em-fa' alt='' 
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png'
						onClick={signInWithGoogle} /></Link>
                        <br /><br />

                    <span>Don't have an account? Click <Link to='/register'>here</Link></span>
                </div>
            </form>
            </>            
        )
    }
}
export default Signin;