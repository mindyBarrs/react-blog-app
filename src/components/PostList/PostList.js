/* LIBRARIES */
import React from 'react';
import { connect } from 'react-redux';

/* ACTIONS */
import { fetchPostsAndUsers } from '../../actions';

/* COMPONENT */
import UserHeader from '../UserHeader/UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    /* HELPER METHOD */
    renderList() {
        return this.props.posts.map(post => {
            return(
                <div className="item" key={ post.id }>
                    <i className="large middle aligned icon user" />

                    <div className="content">
                        <div className="description">
                            <h2> { post.title } </h2>

                            <p>
                                { post.body }
                            </p>
                        </div>

                        <UserHeader userId={ post.userId } />
                    </div>
                </div>
            );
        });
    }
    
    render() {
        return(
            <div className="ui relaxed divided list">
                { this.renderList() }
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers } )(PostList);