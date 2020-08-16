import {profileAPI} from "../api/api";

let initialState = {
    profile: null,
    status: '',
    postDate: [
        {
            message: "Нꙋ гдѣ же ​всѣ​ славѧне?"
        }, {
            message: "Сварогъ​ - истинный богъ!"
        }, {
            message: "Кто на Ивана Кꙋпала?"
        },
    ],
};

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfileTh = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    };
};

export const getStatusTh = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data));
        });
    };
};

export const updateStatusTh = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    };
};

const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch(action.type) {
        //Действие добавления нового поста на стену и в объект _state
        case ADD_POST: {
            stateCopy = {
                ...state,
                postDate: [...state.postDate, {message: action.newPostText}]
            };
            return stateCopy;
        }
        //
        case SET_USER_PROFILE:
            stateCopy = {
                ...state,
                profile: action.profile
            };
            return stateCopy;
        //
        case SET_STATUS:
            stateCopy = {
                ...state,
                status: action.status
            };
            return stateCopy;
        default: 
            return state;
    }  
};

export default profileReducer;