import React from 'react';
import Style from './NavMenu.module.css';

const NavMenu = () => {
    return (
        <aside>
          <nav className={Style.menu}>
            <ul>
              <li className={Style.menu_item}>
                <svg className={Style.menu_icon}>
                  <use xlinkHref="#icon-algiz"></use>
                </svg>
                <a href="#" className={Style.menu_item_link}>Моꙗ страница</a>
              </li>
              <li className={Style.menu_item}>
                <svg className={Style.menu_icon}>
                  <use xlinkHref="#icon-eihwaz"></use>
                </svg>
                <a href="#" className={Style.menu_item_link}>Новости</a>
              </li>
              <li className={Style.menu_item}>
                <svg className={Style.menu_icon}>
                  <use xlinkHref="#icon-laguz"></use>
                </svg>
                <a href="#" className={Style.menu_item_link}>Соѻбщенїꙗ</a>
              </li>
              <li className={Style.menu_item}>
                <svg className={Style.menu_icon}>
                  <use xlinkHref="#icon-mannaz"></use>
                </svg>
                <a href="#" className={Style.menu_item_link}>Дрꙋзьꙗ</a>
              </li>
              <li className={Style.menu_item}>
                <svg className={Style.menu_icon}>
                  <use xlinkHref="#icon-nauthiz"></use>
                </svg>
                <a href="#" className={Style.menu_item_link}>Соѻбщества</a>
              </li>
              <li className={Style.menu_item}>
                <svg className={Style.menu_icon}>
                  <use xlinkHref="#icon-raido"></use>
                </svg>
                <a href="#" className={Style.menu_item_link}>Фотографїи</a>
              </li>
              <li className={Style.menu_item}>
                <svg className={Style.menu_icon}>
                  <use xlinkHref="#icon-thurisaz"></use>
                </svg>
                <a href="#" className={Style.menu_item_link}>Мꙋзыка</a>
              </li>
              <li className={Style.menu_item}>
                <svg className={Style.menu_icon}>
                  <use xlinkHref="#icon-fehu"></use>
                </svg>
                <a href="#" className={Style.menu_item_link}>Настройкы</a>
              </li>
            </ul>
          </nav>
        </aside>
    );
}

export default NavMenu;

