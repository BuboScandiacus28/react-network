import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';

let mapStateToProps = (state) => ({
    profileInfoDate: state.profilePage.profileInfoDate
});

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;