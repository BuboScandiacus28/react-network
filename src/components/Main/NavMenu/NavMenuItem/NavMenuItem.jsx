import React from 'react';
import Style from './NavMenuItem.module.css';
import { NavLink } from 'react-router-dom';

const NavMenuItem = (props) => {
    return (
      <li className={Style.root}>
        <svg className={Style.icon}>
          <use xlinkHref={`#icon-${props.iconId}`}></use>
        </svg>
    <NavLink to={props.href} className={Style.link}>{props.title}</NavLink>
      </li>
    );
}

export default NavMenuItem;

