import React from 'react';
import Style from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    let profileInfoElements = props.profileDate.profileInfoDate.map(el => {
        return <ProfileInfo name={el.name} birthday={el.birthday} city={el.city} education={el.education} webCite={el.webCite}/>
    });
    
    return (
        <div className={Style.root}>
            {profileInfoElements}
            <Posts postDate={props.profileDate.postDate}/>
        </div>
    );
}

export default Profile;