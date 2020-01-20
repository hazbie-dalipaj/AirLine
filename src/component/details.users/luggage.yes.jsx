import React from 'react';

const LuggageYes = () => {
    return(
        <div>
            <span>Please, complete your luggage for check in: </span>
            <input type="number" name="quantity" min="1" max="5" required></input>
        </div>
    )
}
export default LuggageYes;