/* LIBRARIES */
import _ from 'lodash';

/* API */
import jsonPlaceholder from '../apis/jsonPlaceholder';


/* GETTING THE POSTS */
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

/* GETTING THE USER */
export const fetchUser = ( userId ) => dispatch => {
    _fetchUser(userId, dispatch);
};

const _fetchUser = _.memoize(async (userId, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);
    
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
});