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



const Main = (props) => {
  return (
    <main className={Style.root}>

      <NavMenu navMenuItemDate={props.state.navMenuItemDate} />
      
      <div className={Style.line}></div>

      <div class={Style.user_page}>
          
        <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
        <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage} />} />
        <Route path='/friends' render={() => <Friends />} />
        <Route path='/groups' render={() => <Groups />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/photos' render={() => <Photos />} />
        <Route path='/setings' render={() => <Setings />} />
        <Route path='/musics' render={() => <Musics />} />

      </div>

    </main>
  );
}

export default Main;
