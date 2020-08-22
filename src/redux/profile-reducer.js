import {
    profileAPI
} from "../api/api";

let initialState = {
    profile: null,
    status: '',
    postDate: [{
        message: "Нꙋ гдѣ же ​всѣ​ славѧне?"
    }, {
        message: "Сварогъ​ - истинный богъ!"
    }, {
        message: "Кто на Ивана Кꙋпала?"
    }, ],
};

const ADD_POST = 'cyrillic-network/profile/ADD-POST';
const SET_USER_PROFILE = 'cyrillic-network/profile/SET-USER-PROFILE';
const SET_STATUS = 'cyrillic-network/profile/SET-STATUS';
const SAVE_PHOTO = 'cyrillic-network/profile/SAVE-PHOTO';

export const addPost = (newPostText) => ({
    type: ADD_POST,
    newPostText
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
});
export const setPhoto = (photos) => ({
    type: SAVE_PHOTO,
    photos
})

export const getUserProfileTh = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId);

    //debugger;

    dispatch(setUserProfile(data));
};

export const getStatusTh = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);

    dispatch(setStatus(data));
};

export const updateStatusTh = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhotoTh = (photo) => async (dispatch) => {
    debugger;

    let data = await profileAPI.savePhoto(photo);

    debugger;

    if (data.resultCode === 0) {
        dispatch(setPhoto(data.data.photos));
    }
}

const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        //Действие добавления нового поста на стену и в объект _state
        case ADD_POST: {
            stateCopy = {
                ...state,
                postDate: [...state.postDate, {
                    message: action.newPostText
                }]
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
        case SAVE_PHOTO:
            stateCopy = {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
            debugger;
            return stateCopy;
        default:
            return state;
    }
};

export default profileReducer;