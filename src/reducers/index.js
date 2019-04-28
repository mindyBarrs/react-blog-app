/* LIBRARIES */
import { combineReducers } from 'redux';

/* REDUCERS */
import postsReducer from './postsReducer';

export default combineReducers({
    posts: postsReducer
});