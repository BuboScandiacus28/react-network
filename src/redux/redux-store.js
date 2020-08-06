import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navMenuItemReducer from './navMenuItem-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navMenuItemDate: navMenuItemReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;