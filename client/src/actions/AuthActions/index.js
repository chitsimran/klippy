import { SET_IS_LOGGED_IN } from "../../constants/ActionConstants"

export const setIsLoggedIn = isLoggedIn => {
    return {
        type: SET_IS_LOGGED_IN,
        payload: isLoggedIn
    };
};
