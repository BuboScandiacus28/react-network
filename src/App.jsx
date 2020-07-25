import React from 'react';
import Style from './App.module.css';
import Sprite from './sprite';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = (props) => {
  return (
      <div className="App">
        
        <Header />

        <Main state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />

        <Sprite/>

      </div>
  );
}

export default App;
