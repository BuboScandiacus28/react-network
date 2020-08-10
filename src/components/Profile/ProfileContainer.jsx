
import Profile from './Profile';
import {connect} from 'react-redux';
import React from 'react';
import {getUserProfileTh} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
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
    authorizationUserId: state.auth.userId
});

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
    getUserProfileTh
})(WithUrlDataContainerComponent);