import React from 'react';
import Style from './NavMenuItem.module.css';

const NavMenuItem = (props) => {
    return (
      <li className={Style.root}>
        <svg className={Style.icon}>
          <use xlinkHref={`#icon-${props.iconId}`}></use>
        </svg>
    <a href="#" className={Style.link}>{props.title}</a>
      </li>
    );
}

export default NavMenuItem;

