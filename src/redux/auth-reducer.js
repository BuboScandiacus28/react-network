import {
    authAPI,
    securityAPI
} from "../api/api";
import {
    stopSubmit
} from "redux-form";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const SET_USER_DATA = 'cyrillic-network/auth/SET-USER-DATA';
const GET_CAPTCHA_URL = 'cyrillic-network/auth/GET_CAPTCHA_URL';

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login
    },
    isAuth
});

export const setCaptchaUrl = (url) => ({
    type: GET_CAPTCHA_URL,
    url
})

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

export const loginTh = (email, password, rememberMe, captcha = '') => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    debugger;
    if (data.resultCode === 0) {
        dispatch(getAuthUserTh());
        dispatch(setCaptchaUrl(null));
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaTh());
        }
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

export const getCaptchaTh = () => async (dispatch) => {
    const data = await securityAPI.getCaptcha();
    //debugger;
    dispatch(setCaptchaUrl(data.url));
}

const authReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        //Добавление данных залогиненного пользователя в систему 
        case SET_USER_DATA: {
            stateCopy = {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            };
            return stateCopy;
        }
        //
        case GET_CAPTCHA_URL: {
            stateCopy = {
                ...state,
                captchaUrl: action.url
            };
            return stateCopy;
        }
        default:
            return state;
    }
};

export default authReducer;