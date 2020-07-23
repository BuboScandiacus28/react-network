import React from 'react';
import Style from './App.module.css';
import Sprite from './sprite';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';




const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Header />

        <Main />

        <Sprite/>

      </div>
    </BrowserRouter>
  );
}

export default App;
