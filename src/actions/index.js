/* LIBRARIES */
import _ from 'lodash';

/* API */
import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    /* GETS BLOG POSTS */
    await dispatch(fetchPosts());

    /* GETS USERS */
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
};

/* GETTING THE POSTS */
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};


/* GETTING THE USER */
export const fetchUser = ( userId ) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);
    
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};

/* GETTING THE USER MEMORIZE VERSION
export const fetchUser = ( userId ) => dispatch => {
    _fetchUser(userId, dispatch);
};

const _fetchUser = _.memoize(async (userId, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);
    
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
}); */