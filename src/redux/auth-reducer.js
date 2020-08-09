let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_AUTH = 'TOGGLE-IS-AUTH';

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const toggleIsAuth = (isAuth) => ({type: TOGGLE_IS_AUTH, isAuth});

const authReducer = (state = initialState, action) => {
    let stateCopy;
    switch(action.type) {
        //Добавление данный залогиненного пользователя в систему 
        case SET_USER_DATA: {
            stateCopy = {
                ...state,
                ...action.data
            };
            return stateCopy;
        }
        case TOGGLE_IS_AUTH:
            stateCopy = {
                ...state,
                isAuth: action.isAuth
            };
            return stateCopy;
        default: 
            return state;
    }  
};

export default authReducer;