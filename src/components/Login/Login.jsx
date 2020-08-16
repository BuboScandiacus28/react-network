import React from 'react';
import Style from './Login.module.css';
import LoginFormContainer from './LoginForm/LoginFormContainer';

const Login = (props) => {
    

    return (
        <div className={Style.root}>
            <h1>Login</h1>
            <LoginFormContainer />
        </div>
    );
};

export default Login;