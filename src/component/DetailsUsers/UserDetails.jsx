import React from 'react'
import './UserDetails.css';
const UserDetails = (props) => {

    const {name, email, phone} = props;
    const handleSubmit = async event => {
        event.preventDefault();
    }

    const hadleChange = event => {
        const {onNameChange, onEmailChange, onPhoneChange} = props;
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
        
    }

        return(
            <>           
                <form className='board tc br4 pa2 ma4 dib shadow-2' onSubmit={handleSubmit} >
                    <h2>Your Details </h2>
                    <img className='avantar' alt='' src='https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png'  />
                    <input type='text' placeholder='NAME SURNAME*' name='name' value={name} onChange={hadleChange} required/>
                    <input type='text' placeholder='Email Address*' name='email' value={email} onChange={hadleChange} required/>
                    <input type='tel' placeholder='Phone*' name='phone' value={phone} onChange={hadleChange} required/>
                </form>
            </>
        ); 
}
export default UserDetails;
