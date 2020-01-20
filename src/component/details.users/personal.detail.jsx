import React, {Component} from 'react'

class PersonalDetail extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            email:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
    }
    hadleChange = event => {
        const {value, name } = event.target;
        this.setState({ [name]: value });
    }
    render(){
        return(
            <form className='bord' onSubmit={this.handleSubmit} >
                <h2>Your Details </h2>
                <input type='text' placeholder='NAME SURNAME' name='name' value={this.state.name} onChange={this.hadleChange}  required />
                <input type='text' placeholder='Email Address' name='email' value={this.state.email} onChange={this.hadleChange}  required />
            </form>
        );
    }
    
}
export default PersonalDetail;
