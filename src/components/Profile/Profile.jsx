import React from 'react';
import Style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../common/Preloader/Preloader';

const Profile = ({profile, status, updateStatusTh}) => {
    if (!profile) return (<Preloader />);
    return (
        <div className={Style.root}>
            <ProfileInfo  profilePhoto={profile.photos.large} fullName={profile.fullName} status={status} contacts={profile.contacts} updateStatusTh={updateStatusTh}/>
            <PostsContainer />
        </div>
    );
};

export default Profile;