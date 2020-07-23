import React from 'react';
import Style from './App.module.css';
import Sprite from './sprite';
import Header from './components/Header/Header';
import Main from './components/Main/Main';




const App = () => {
  return (
    <div className="App">
      
      <Header />

      <Main />

      <Sprite/>

    </div>
  );
}

export default App;
