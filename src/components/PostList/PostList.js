/* LIBRARIES */
import React from 'react';
import { connect } from 'react-redux';

/* ACTIONS */
import { fetchPosts } from '../../actions';

/* COMPONENT */
import UserHeader from '../UserHeader/UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
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

                            <UserHeader />
                        </div>
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

export default connect(mapStateToProps, { fetchPosts } )(PostList);