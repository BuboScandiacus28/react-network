import React from 'react';
import Style from './Login.module.css';
import LoginFormContainer from './LoginForm/LoginFormContainer';

const Login = () => {
    return (
        <div className={Style.root}>
            <h1 className={Style.login_title}>Login</h1>
            <LoginFormContainer />
        </div>
    );
};

export default Login;