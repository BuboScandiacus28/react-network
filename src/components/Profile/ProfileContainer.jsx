import React from 'react';
import Profile from './Profile';


const ProfileContainer = (props) => {
    let state = props.store.getState();
    return (
        <Profile store={props.store} profileInfoDate={state.profilePage.profileInfoDate}/>
    );
}

export default ProfileContainer;