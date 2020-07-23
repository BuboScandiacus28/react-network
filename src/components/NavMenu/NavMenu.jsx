import React from 'react';
import './NavMenu.css';

const NavMenu = () => {
    return (
        <aside className="link-panel-left">
          <nav className="menu">
            <ul className="menu-list">
              <li className="menu-item">
                <svg className="menu-icon">
                  <use xlinkHref="#icon-algiz"></use>
                </svg>
                <a href="#" className="menu-item-link">Моꙗ страница</a>
              </li>
              <li className="menu-item">
                <svg className="menu-icon">
                  <use xlinkHref="#icon-eihwaz"></use>
                </svg>
                <a href="#" className="menu-item-link">Новости</a>
              </li>
              <li className="menu-item">
                <svg className="menu-icon">
                  <use xlinkHref="#icon-laguz"></use>
                </svg>
                <a href="#" className="menu-item-link">Соѻбщенїꙗ</a>
              </li>
              <li className="menu-item">
                <svg className="menu-icon">
                  <use xlinkHref="#icon-mannaz"></use>
                </svg>
                <a href="#" className="menu-item-link">Дрꙋзьꙗ</a>
              </li>
              <li className="menu-item">
                <svg className="menu-icon">
                  <use xlinkHref="#icon-nauthiz"></use>
                </svg>
                <a href="#" className="menu-item-link">Соѻбщества</a>
              </li>
              <li className="menu-item">
                <svg className="menu-icon">
                  <use xlinkHref="#icon-raido"></use>
                </svg>
                <a href="#" className="menu-item-link">Фотографїи</a>
              </li>
              <li className="menu-item">
                <svg className="menu-icon">
                  <use xlinkHref="#icon-thurisaz"></use>
                </svg>
                <a href="#" className="menu-item-link">Мꙋзыка</a>
              </li>
              <li className="menu-item">
                <svg className="menu-icon">
                  <use xlinkHref="#icon-fehu"></use>
                </svg>
                <a href="#" className="menu-item-link">Настройкы</a>
              </li>
            </ul>
          </nav>
        </aside>
    );
}

export default NavMenu;

