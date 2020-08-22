import {
    usersAPI,
    followAPI
} from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const FOLLOW = 'cyrillic-network/users/FOLLOW';
const UNFOLLOW = 'cyrillic-network/users/UNFOLLOW';
const SET_USERS = 'cyrillic-network/users/SET-USERS';
const SET_CURRENT_PAGE = 'cyrillic-network/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'cyrillic-network/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'cyrillic-network/users/TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'cyrillic-network/users/TOGGLE-FOLLOWING-IN-PROGRESS';

export const follow = (userId) => ({
    type: FOLLOW,
    userId
});
export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
export const toggleFollowingInProgress = (followingInProgress, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    followingInProgress,
    userId
});

//Thunks level

export const getUsersTh = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

export const checkFollowEventTh = (check, userId) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));

    if (!check) {
        let data = await followAPI.follow(userId);
        if (data.resultCode === 0) {
            dispatch(follow(userId));
        }
    } else {
        let data = await followAPI.unfollow(userId);

        if (data.resultCode === 0) {
            return dispatch(unfollow(userId));
        }
    }

    dispatch(toggleFollowingInProgress(false, userId));
};

const usersReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        //Добавление пользователя в друзья
        case FOLLOW: {
            stateCopy = {
                ...state,
                users: updateObjectInArray(state.users, "id", {followed: true}, action.userId)
            };
            return stateCopy;
        }
        //Удаление пользователя из друзей
        case UNFOLLOW:
            stateCopy = {
                ...state,
                users: updateObjectInArray(state.users, "id", {followed: false}, action.userId)
            };
            return stateCopy;
            //Добавление новых пользователей
        case SET_USERS:
            stateCopy = {
                ...state,
                users: [...action.users]
            };
            return stateCopy;
            //Изменение текущей страницы пользователей
        case SET_CURRENT_PAGE:
            stateCopy = {
                ...state,
                currentPage: action.currentPage
            };
            return stateCopy;
            //Изменение общего количества пользователей соц. сети
        case SET_TOTAL_USERS_COUNT:
            stateCopy = {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
            return stateCopy;
            //Изменение состояния прелоадера
        case TOGGLE_IS_FETCHING:
            stateCopy = {
                ...state,
                isFetching: action.isFetching
            };
            return stateCopy;
            //Изменение состояния кнопки
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            stateCopy = {
                ...state,
                followingInProgress: action.followingInProgress ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            };
            return stateCopy;
        default:
            return state;
    }
};

export default usersReducer;