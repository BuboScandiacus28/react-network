import React from 'react';
import Style from './User.module.css';
import userPhoto from './Smile.png';

const User = (props) => {
  let checkFollow = (check) => {
    if (!check) return 'Follow';
    else return 'Unfollow';
  };
  return (
    <div className={Style.root}>
      <div className={Style.left_col}>
        <div className={Style.profile_photo_container}>
          <img src={props.photoUrl != null ? props.photoUrl : userPhoto} alt="Фото пользователя"/>
        </div>
        <div onClick={() => props.followEvent(props.userId)} className={Style.follow}>{checkFollow(props.followed)}</div>
      </div>
      <div className={Style.right_col}>
        <h2 className={Style.full_name}>{props.name}</h2>
        <div className={Style.location}>
          <h2 className={Style.country}>{props.country},</h2> 
          <h2 className={Style.city}>{props.city}</h2>
        </div>
        <p className={Style.status}>{props.status}</p>
      </div>
    </div>
  );
};

export default User;
