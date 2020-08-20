import React from 'react';
import Style from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

const Dialog = ({userId, title}) => {
  return (
    <div className={Style.root}>
      <div className={Style.online}></div>
      <NavLink to={`/dialogs/${userId}`} className={Style.href}><h1 className={Style.title}>{title}</h1></NavLink>
    </div>
  );
};

export default Dialog;
