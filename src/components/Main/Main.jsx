import React from 'react';
import Style from './Main.module.css';
import NavMenu from './NavMenu/NavMenu';
import Profile from './Profile/Profile';
import Posts from './Posts/Posts';



const Main = () => {
  return (
    <main className={Style.root}>

      <NavMenu />
      
      <div className={Style.line}></div>

      <div class={Style.user_page}>
          
        <Profile />

        <Posts />

      </div>

    </main>
  );
}

export default Main;
