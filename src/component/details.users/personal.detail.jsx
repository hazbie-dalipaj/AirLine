import React, {Component} from 'react'

class PersonalDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:''
        }
    }
      
    handleSubmit = async event => {
        event.preventDefault();
    }
    hadleChange = event => {
        const {onNameChange, onEmailChange} = this.props;
        const {value, name, email } = event.target; 
        
        switch(name){
            case 'name':{
                onNameChange(value);
              break;
            }
            case 'email':{
                onEmailChange(value);
              break;
            }           
            default:
          }
        this.setState({ [name]: value, [email]:value });
    }
    
    render(){
        return(           
            <form className='bord' onSubmit={this.handleSubmit} >
                <h2>Your Details </h2>
                <img className='avantar' alt='' src='https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png'  />
                <input type='text' placeholder='NAME SURNAME' name='name' value={this.state.name} onChange={this.hadleChange} required/>
                <input type='text' placeholder='Email Address' name='email' value={this.state.email} onChange={this.hadleChange} required/>               
            </form>
        );
    }
    
}
export default PersonalDetail;