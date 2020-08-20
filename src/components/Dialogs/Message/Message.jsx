import React from 'react';
import Style from './Message.module.css';
import profilePhoto from './../../../img/Smile.png';

const Message = ({user, message}) => {

  const userDirection = (user) => {
    if (user == "Ꙗ" || user == "Я" || user == "Me") return Style.right;
    else return Style.left;
  };

  return (
    <li className={`${Style.root} ${userDirection(user)}`}>
      <div className={Style.icon_container}>
        <img src={profilePhoto} alt={`Иконка пользователя ${user}`} className={Style.icon} />
        <h1 className={Style.title}>{user}</h1>
      </div>
      <p className={Style.text}>{message}</p>
    </li>
  );
};

export default Message;
