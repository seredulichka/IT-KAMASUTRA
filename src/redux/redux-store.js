import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sitebarReducer from './sitebar-reducer'
import usersReducer from './users-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sitebar: sitebarReducer
});

let store = createStore(reducers);

export default store;