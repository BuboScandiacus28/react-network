import React from 'react';
import Style from './NavMenu.module.css';
import NavMenuItem from './NavMenuItem/NavMenuItem';

const NavMenu = () => {
    return (
        <aside>
          <nav className={Style.menu}>
            <ul>
              <NavMenuItem iconId="algiz" title="Моꙗ страница"/>
              <NavMenuItem iconId="eihwaz" title="Новости"/>
              <NavMenuItem iconId="laguz" title="Соѻбщенїꙗ"/>
              <NavMenuItem iconId="mannaz" title="Дрꙋзьꙗ"/>
              <NavMenuItem iconId="nauthiz" title="Соѻбщества"/>
              <NavMenuItem iconId="raido" title="Фотографїи"/>
              <NavMenuItem iconId="thurisaz" title="Мꙋзыка"/>
              <NavMenuItem iconId="fehu" title="Настройкы"/>
            </ul>
          </nav>
        </aside>
    );
}

export default NavMenu;

