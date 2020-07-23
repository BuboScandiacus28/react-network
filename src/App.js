import React from 'react';
import './App.css';
import Sprite from './sprite';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import Profile from './components/Profile/Profile';
import Posts from './components/Posts/Posts';



const App = () => {
  return (
    <div className="App">
      
      <Header />

      <main>

        <NavMenu />
      
        <div className="line"></div>

        <div class="user-page">
          
          <Profile />

          <Posts />

        </div>

        

      </main>


      <Sprite/>

    </div>
  );
}

export default App;
