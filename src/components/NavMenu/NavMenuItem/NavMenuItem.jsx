import React from 'react';
import Style from './NavMenuItem.module.css';
import {NavLink} from 'react-router-dom';

const NavMenuItem = ({iconId, href, title}) => {
    return (
      <li className={Style.root}>
        <svg className={Style.icon}>
          <use xlinkHref={`#icon-${iconId}`}></use>
        </svg>
        <NavLink to={href} className={Style.link}>{title}</NavLink>
      </li>
    );
};

export default NavMenuItem;

