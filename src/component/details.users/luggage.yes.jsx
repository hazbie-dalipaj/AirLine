import React from 'react';

class LuggageYes extends React.Component {
    constructor(props){
        super(props)
        this.props={
            name:'',
            quantity:''
        }
    }
    render(){
        return(
        <div>
            <span>Please, complete your luggage for check in: </span>
            <input type="number" name="quantity" min="1" max="5" required />
        </div>
        ) 
    }         
}
export default LuggageYes;