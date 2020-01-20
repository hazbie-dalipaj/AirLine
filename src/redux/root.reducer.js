import { combineReducers } from 'redux';

import UserReducer from './user/user.reducer';
import FlightReducer from './flight/flight.reducer';

export default combineReducers({
  user: UserReducer,
  flights: FlightReducer
});