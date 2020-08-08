import React from 'react';
import Style from './Message.module.css';
import profilePhoto from './../../../img/Smile.png';

const Message = (props) => {

  const userDirection = (user) => {
    if (user == "Ꙗ" || user == "Я" || user == "Me") return Style.right;
    else return Style.left;
  };

  return (
    <li className={`${Style.root} ${userDirection(props.user)}`}>
      <div className={Style.icon_container}>
        <img src={profilePhoto} alt={`Иконка пользователя ${props.user}`} className={Style.icon} />
        <h1 className={Style.title}>{props.user}</h1>
      </div>
      <p className={Style.text}>{props.message}</p>
    </li>
  );
};

export default Message;
