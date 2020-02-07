import React, {Component} from 'react'
import './personal.detail.css';

class PersonalDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
            phone: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
    }

    hadleChange = event => {
        const {onNameChange, onEmailChange, onPhoneChange} = this.props;
        const {value, name, email, phone} = event.target;
        switch(name){
            case 'name':{
                onNameChange(value);
              break;
            }
            case 'email':{
                onEmailChange(value);
              break;
            }
            case 'phone':{
                onPhoneChange(value);
                break;
            }         
            default:
          }         
        this.setState({ [name]: value, [email]:value, [phone]:value });
    }

    render(){
        return(
            <>           
            <form className='bord' onSubmit={this.handleSubmit} action='form.php' method='get' >
                <h2>Your Details </h2>
                <img className='avantar' alt='' src='https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png'  />
                <input type='text' placeholder='NAME SURNAME' name='name' value={this.state.name} onChange={this.hadleChange} required/>
                <input type='text' placeholder='Email Address' name='email' value={this.state.email} onChange={this.hadleChange} required/>
                <input type='tel' placeholder='Phone' name='phone' value={this.state.phone} onChange={this.hadleChange} required/>
            </form>
            <ol className='heading'>Please controll your details to payment later</ol> 
            <li >Your name is: <a className='heading2'>{this.state.name}</a></li>
            <li >Your email is: <a className='heading2'>{this.state.email}</a></li>
            <li >Your phone is: <a className='heading2'>{this.state.phone}</a></li>
            </>
        );
    }   
}
export default PersonalDetail;
