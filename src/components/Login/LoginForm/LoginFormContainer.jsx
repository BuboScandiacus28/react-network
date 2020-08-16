import React from 'react';
import {connect} from 'react-redux';
import LoginReduxForm from './LoginForm';
import {loginTh} from './../../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';

const LoginContainer = (props) => {
  const onSubmit = (formData) => {
    props.loginTh(formData.email, formData.password, formData.rememberMe);    
  };
  if (props.isAuth) return (
    <Redirect to={'/profile'}/>
  );
  return (
    <LoginReduxForm onSubmit={onSubmit} />
  );
};

let mapToStateProps = (state) => {
  return {
      isAuth: state.auth.isAuth,
  };
};

export default connect(mapToStateProps, {
  loginTh
})(LoginContainer);
