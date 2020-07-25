import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import store from './state';
import * as serviceWorker from './serviceWorker';

let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
        </BrowserRouter>
        , document.getElementById('root') 
    ); 
}

renderEntireTree();

store.subscribe(renderEntireTree);

serviceWorker.unregister();