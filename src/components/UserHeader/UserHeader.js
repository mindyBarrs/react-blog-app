import React from 'react';
import { connect } from 'react-redux';

/* ACTION */
import { fetchUser }  from '../../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser( this.props.UserId ); 
    }

    render() {
        return(
            <div>
                User Header
            </div>
        );
    }
}

export default connect(null, { fetchUser })(UserHeader);