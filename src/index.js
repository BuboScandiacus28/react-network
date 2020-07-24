import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';
import App from './App.jsx';
import state from './state';



ReactDOM.render(<App state={state} />, document.getElementById('root') );