/* USED TO MAINTAIN THE LIST OF BLOG POSTS */
export default ( state = [], action ) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};