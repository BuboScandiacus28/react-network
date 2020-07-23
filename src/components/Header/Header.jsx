import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo-container">
            <svg className="logo">
                <use xlinkHref="#icon-logo"></use>
            </svg>
            <div className="logo-text-container">
                <h1 className="logo-title">Кыриллица</h1>
                <h2 className="logo-sub-title">Соцїальнаꙗ сѣть длѧ старовѣровъ</h2>
            </div>
            </div>
            <div className="line"></div>
        </header>
    );
}

export default Header;