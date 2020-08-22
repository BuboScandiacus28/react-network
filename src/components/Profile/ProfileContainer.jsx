
import Profile from './Profile';
import {connect} from 'react-redux';
import React from 'react';
import {getUserProfileTh, getStatusTh, updateStatusTh, savePhotoTh} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    
    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.authorizationUserId;
        this.props.getUserProfileTh(userId);
        this.props.getStatusTh(userId);
    }
    
    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) this.refreshProfile();
    }

    render() {
        return (
            <Profile {...this.props} savePhotoTh={this.props.savePhotoTh} isOwner={!this.props.match.params.userId} updateStatusTh={this.props.updateStatusTh}/>
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
        getUserProfileTh, getStatusTh, updateStatusTh,
        savePhotoTh,
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);