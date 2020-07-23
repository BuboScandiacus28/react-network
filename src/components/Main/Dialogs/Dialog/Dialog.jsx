import React from 'react';
import Style from './Dialog.module.css';

const Dialog = (props) => {
  return (
    <div className={Style.root}>
      <div className={Style.online}></div>
      <a href="#" className={Style.href}><h1 className={Style.title}>{props.title}</h1></a>
    </div>
  );
}

export default Dialog;
