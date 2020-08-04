import React from 'react';
import Style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
    let profileInfoElements = props.profileInfoDate.map(el => {
        return <ProfileInfo name={el.name} birthday={el.birthday} city={el.city} education={el.education} webCite={el.webCite} />
    });
    
    return (
        <div className={Style.root}>
            {profileInfoElements}
            <PostsContainer />
        </div>
    );
}

export default Profile;