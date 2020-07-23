import React from 'react';
import Style from './Main.module.css';
import NavMenu from './NavMenu/NavMenu';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import Friends from './Friends/Friends';
import Groups from './Groups/Groups';
import News from './News/News';
import Photos from './Photos/Photos';
import Setings from './Setings/Setings';
import Musics from './Musics/Musics';
import { Route } from 'react-router-dom';



const Main = () => {
  return (
    <main className={Style.root}>

      <NavMenu />
      
      <div className={Style.line}></div>

      <div class={Style.user_page}>
          
        <Route path='/profile' component={Profile}/>
        <Route path='/dialogs' component={Dialogs}/>
        <Route path='/friends' component={Friends}/>
        <Route path='/groups' component={Groups}/>
        <Route path='/news' component={News}/>
        <Route path='/photos' component={Photos}/>
        <Route path='/setings' component={Setings}/>
        <Route path='/musics' component={Musics}/>

      </div>

    </main>
  );
}

export default Main;
