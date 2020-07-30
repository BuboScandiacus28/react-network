import React from 'react';
import Style from './App.module.css';
import Sprite from './sprite';
import Header from './Header/Header';
import NavMenu from './NavMenu/NavMenu';
import ProfileContainer from './Profile/ProfileContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
import Friends from './Friends/Friends';
import Groups from './Groups/Groups';
import News from './News/News';
import Photos from './Photos/Photos';
import Setings from './Setings/Setings';
import Musics from './Musics/Musics';
import { Route } from 'react-router-dom';



const App = (props) => {
  return (
    <div className="App">

      <Header />

      <main className={Style.root}>

        <NavMenu navMenuItemDate={props.state.navMenuItemDate} />

        <div className={Style.line}></div>

        <div class={Style.user_page}>

          <Route path='/profile' render={() => <ProfileContainer store={props.store} />} />
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
          <Route path='/friends' render={() => <Friends />} />
          <Route path='/groups' render={() => <Groups />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/photos' render={() => <Photos />} />
          <Route path='/setings' render={() => <Setings />} />
          <Route path='/musics' render={() => <Musics />} />

        </div>

      </main>

      <Sprite />

    </div>
  );
}

export default App;
