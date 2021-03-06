import React from 'react';
import Style from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = ({isAuth, login, logoutTh}) => {
    return (
        <header>
            <div className={Style.left_col}>
                <div className={Style.logo_container}>
                    <svg className={Style.logo}>
                        <use xlinkHref="#icon-logo"></use>
                    </svg>
                    <div className={Style.logo_text_container}>
                        <h1 className={Style.logo_title}>Кыриллица</h1>
                        <h2 className={Style.logo_sub_title}>Соцїальнаꙗ сѣть длѧ старовѣровъ</h2>
                    </div>
                </div>
                <div className={Style.line}></div>
            </div>
            <div className={Style.right_col}>
                <div className={Style.loginBlock}>
                    {
                        isAuth 
                        ? <>
                            <h1 className={Style.user_name}>{login}</h1>
                            <button className={Style.login_btn} onClick={logoutTh}>Log out</button>
                        </> 
                        : <NavLink className={Style.login_btn} to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    );
};

export default Header;