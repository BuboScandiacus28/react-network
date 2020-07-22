import React from 'react';
import './App.css';
import Sprite from './sprite';


const App = () => {
  return (
    <div className="App">
      
      <header>
        <div className="logo-container">
          <svg className="logo">
            <use xlinkHref="#icon-logo"></use>
          </svg>
          <div className="logo-text-container">
            <h1 className="logo-title">Кыриллица </h1>
            <h2 className="logo-sub-title">Соцїальнаꙗ сѣть длѧ старовѣровъ</h2>
          </div>
        </div>
        <div className="line"></div>
      </header>

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
        </ul>
      </nav>

      <Sprite/>

    </div>
  );
}

export default App;
