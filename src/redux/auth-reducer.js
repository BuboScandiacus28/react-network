import {
    authAPI
} from "../api/api";
import {
    stopSubmit
} from "redux-form";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const SET_USER_DATA = 'cyrillic-network/auth/SET-USER-DATA';

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login
    },
    isAuth
});

//Thunks level

export const getAuthUserTh = () => async (dispatch) => {
    let data = await authAPI.me();

    if (data.resultCode === 0) {
        let {
            id,
            email,
            login
        } = data.data;

        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const loginTh = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe);

    if (data.resultCode === 0) {
        dispatch(getAuthUserTh());
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {
            _error: message
        }));
    }
};

export const logoutTh = () => async (dispatch) => {
    let data = await authAPI.logout();
    
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

const authReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        //Добавление данный залогиненного пользователя в систему 
        case SET_USER_DATA: {
            stateCopy = {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            };
            return stateCopy;
        }
        default:
            return state;
    }
};

export default authReducer;