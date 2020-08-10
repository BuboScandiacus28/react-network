import React from 'react';
import Style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../common/Preloader/Preloader';

const Profile = (props) => {
    if (!props.profile) return (<Preloader />);
    return (
        <div className={Style.root}>
            <ProfileInfo  profilePhoto={props.profile.photos.large} fullName={props.profile.fullName} aboutMe={props.profile.aboutMe} contacts={props.profile.contacts}/>
            <PostsContainer />
        </div>
    );
};

export default Profile;