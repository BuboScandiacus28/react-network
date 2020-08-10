import {
    usersAPI,
    followAPI
} from "../api/api";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS';

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

export const getUsersTh = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    };
};

export const checkFollowEventTh = (check, userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        if (!check) {
            followAPI.follow(userId).then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId));
                }
            });
        }
        else {
            followAPI.unfollow(userId).then(data => {
                if (data.resultCode === 0) {
                  return dispatch(unfollow(userId));
                }
            });
        }
        dispatch(toggleFollowingInProgress(false, userId));
    };
};

const usersReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        //Добавление пользователя в друзья
        case FOLLOW: {
            stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return {
                        ...u,
                        followed: true
                    };

                    return u;
                })
            };
            return stateCopy;
        }
        //Удаление пользователя из друзей
        case UNFOLLOW:
            stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return {
                        ...u,
                        followed: false
                    };
                    return u;
                })
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
                followingInProgress: action.followingInProgress ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            };
            return stateCopy;
        default:
            return state;
    }
};

export default usersReducer;