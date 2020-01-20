import {UserTypes} from './user.types';

const INITAL_SATTE = {
    currentUser: null
};

const UserReducer = (state = INITAL_SATTE, action) => {
    switch (action.type) {
        case UserTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
            default:
                return state;
    }
}
export default UserReducer;