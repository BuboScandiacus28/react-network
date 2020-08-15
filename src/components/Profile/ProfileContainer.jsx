
import Profile from './Profile';
import {connect} from 'react-redux';
import React from 'react';
import {getUserProfileTh, getStatusTh, updateStatusTh} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.authorizationUserId;
        this.props.getUserProfileTh(userId);
        this.props.getStatusTh(userId);
    }

    render() {
        return (
            <Profile {...this.props} updateStatusTh={this.props.updateStatusTh}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizationUserId: state.auth.userId
});

export default compose(
    connect(mapStateToProps, {
        getUserProfileTh, getStatusTh, updateStatusTh
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);