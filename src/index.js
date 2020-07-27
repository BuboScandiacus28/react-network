import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import * as serviceWorker from './serviceWorker';

//Функция рендера страницы
let renderEntireTree = () => {
    ReactDOM.render(
        //BrowserRouter - обертка для использования компонента Route
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>
        , document.getElementById('root') 
    ); 
}

renderEntireTree();

//Отправка объекту store функции рендера страницы - renderEntireTree
store.subscribe(renderEntireTree);

serviceWorker.unregister();