
import Profile from './Profile';
import {connect} from 'react-redux';
import React from 'react';
import {getUserProfileTh} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger;
        this.props.getUserProfileTh(this.props.match.params.userId, this.props.authorizationUserId);
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    authorizationUserId: state.auth.userId
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getUserProfileTh
})(WithUrlDataContainerComponent);