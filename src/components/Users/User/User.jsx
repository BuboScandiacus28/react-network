import React from 'react';
import Style from './User.module.css';
import userPhoto from './../../../img/Smile.png';
import {NavLink} from 'react-router-dom';

const User = ({userId, photoUrl, followingInProgress, followEvent, followed, name, country, city, status}) => {

  let checkFollow = (check) => {
    if (!check) return 'Follow';
    else return 'Unfollow';
  };
  
  return (
    <div className={Style.root}>
      <div className={Style.left_col}>
        <NavLink to={`/profile/${userId}`} className={Style.profile_photo_container}>
          <img src={photoUrl != null ? photoUrl : userPhoto} alt="Фото пользователя"/>
        </NavLink>
        <button disabled={followingInProgress.some(id => id === userId)} onClick={() => followEvent(followed, userId)} className={Style.follow}>{checkFollow(followed)}</button>
      </div>
      <div className={Style.right_col}>
        <h2 className={Style.full_name}>{name}</h2>
        <div className={Style.location}>
          <h2 className={Style.country}>{country},</h2> 
          <h2 className={Style.city}>{city}</h2>
        </div>
        <p className={Style.status}>{status}</p>
      </div>
    </div>
  );
};

export default User;
