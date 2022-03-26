import { SET_IS_LOGGED_IN } from "../constants/ActionConstants";

const initialState = {
    isLoggedIn: false
};

const AuthReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_LOGGED_IN: return {
            isLoggedIn: action.payload
        };

        default: return state;
    }
};

export default AuthReducer;
