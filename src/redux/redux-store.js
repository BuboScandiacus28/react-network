import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navMenuItemReducer from './navMenuItem-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navMenuItemDate: navMenuItemReducer
});

let store = createStore(reducers);

export default store;