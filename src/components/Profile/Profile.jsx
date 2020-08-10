import React from 'react';
import Style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../common/Preloader/Preloader';
import {Redirect} from 'react-router-dom';

const Profile = (props) => {
    if (!props.isAuth) return <Redirect to={'/login'} />;
    if (!props.profile) return (<Preloader />);
    return (
        <div className={Style.root}>
            <ProfileInfo  profilePhoto={props.profile.photos.large} fullName={props.profile.fullName} aboutMe={props.profile.aboutMe} contacts={props.profile.contacts}/>
            <PostsContainer />
        </div>
    );
};

export default Profile;