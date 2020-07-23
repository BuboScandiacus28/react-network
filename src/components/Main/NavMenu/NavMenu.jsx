import React from 'react';
import Style from './NavMenu.module.css';
import NavMenuItem from './NavMenuItem/NavMenuItem';

const NavMenu = () => {
    return (
        <aside>
          <nav className={Style.menu}>
            <ul>
              <NavMenuItem href="/profile" iconId="algiz" title="Моꙗ страница"/>
              <NavMenuItem href="/news" iconId="eihwaz" title="Новости"/>
              <NavMenuItem href="/dialogs" iconId="laguz" title="Соѻбщенїꙗ"/>
              <NavMenuItem href="/friends" iconId="mannaz" title="Дрꙋзьꙗ"/>
              <NavMenuItem href="/groups" iconId="nauthiz" title="Соѻбщества"/>
              <NavMenuItem href="/photos" iconId="raido" title="Фотографїи"/>
              <NavMenuItem href="/musics" iconId="thurisaz" title="Мꙋзыка"/>
              <NavMenuItem href="/setings" iconId="fehu" title="Настройкы"/>
            </ul>
          </nav>
        </aside>
    );
}

export default NavMenu;

