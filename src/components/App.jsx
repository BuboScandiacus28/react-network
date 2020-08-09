import React from 'react';
import Style from './App.module.css';
import Sprite from './sprite';
import HeaderContainer from './Header/HeaderContainer';
import ProfileContainer from './Profile/ProfileContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
import NavMenuContainer from './NavMenu/NavMenuContainer';
import UsersContainer from './Users/UsersContainer';
import Groups from './Groups/Groups';
import News from './News/News';
import Photos from './Photos/Photos';
import Setings from './Setings/Setings';
import Musics from './Musics/Musics';
import {Route} from 'react-router-dom';




const App = () => {
  return (
    <div className="App">

      <HeaderContainer />

      <main className={Style.root}>

        <NavMenuContainer />

        <div className={Style.line}></div>

        <div className={Style.user_page}>

          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
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
};

export default App;
