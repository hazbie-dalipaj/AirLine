import FlightType from './flight.types';

const INITAL_STATE = {
    hidden: true
};

const FlightReducer = (state = INITAL_STATE, action) => {
    switch (action.type){
        case FlightType.TOGGLE_FLIGHT_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };
            default:
                return state;
    }
}
export default FlightReducer;