let initialState = {
    users: [
        
    ]
};

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

const usersReducer = (state = initialState, action) => {
    let stateCopy;
    switch(action.type) {
        //Добавление пользователя в друзья
        case FOLLOW: {
            stateCopy = {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) return {...u, followed: true};
                    
                    return u;
                })
            };
            return stateCopy;
        }
        //Удаление пользователя из друзей
        case UNFOLLOW:
            stateCopy = {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) return {...u, followed: false};
                    return u;
                })
            };
            return stateCopy;
        //Добавление новых пользователей
        case SET_USERS:
            stateCopy = {
                ...state,
                users: [...state.users, ...action.users]
            };
            return stateCopy;
        default: 
            return state;
    }  
};

export default usersReducer;