import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts.css';
import App from './components/App.jsx';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/redux-store';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

//Функция рендера страницы
let renderEntireTree = () => {
    ReactDOM.render(
        //BrowserRouter - обертка для использования компонента Route
        <BrowserRouter>
            <Provider store = {store}>
                <App />
            </Provider>
        </BrowserRouter>
        , document.getElementById('root')
    ); 
};
renderEntireTree();

//Отправка объекту store функции рендера страницы - renderEntireTree
store.subscribe(() => {renderEntireTree();});

serviceWorker.unregister();