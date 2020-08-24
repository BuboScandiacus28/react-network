import React from 'react';
import {connect} from 'react-redux';
import LoginReduxForm from './LoginForm';
import {loginTh, getCaptchaTh} from './../../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';

const LoginContainer = ({loginTh, isAuth, captchaUrl}) => {
  const onSubmit = (formData) => {
    loginTh(formData.email, formData.password, formData.rememberMe, formData.captcha);    
  };

  if (isAuth) return (
    <Redirect to={'/profile'}/>
  );
  
  return (
    <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
  );
};

let mapToStateProps = (state) => {
  return {
      isAuth: state.auth.isAuth,
      captchaUrl: state.auth.captchaUrl
  };
};

export default connect(mapToStateProps, {
  loginTh, getCaptchaTh 
})(LoginContainer);
