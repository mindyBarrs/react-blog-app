/* LIBRARIES */
import { combineReducers } from 'redux';

/* REDUCERS */
import postsReducer from './postsReducer';
import userReducer from './usersReducer';

export default combineReducers({
    posts: postsReducer,
    users: userReducer
});