import React from 'react';
import Style from './LoginForm.module.css';
import {reduxForm, Field} from 'redux-form';
import {Input} from '../../common/FormControls/FormControls';
import {requiredField} from '../../../utils/validators/validator';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[requiredField]} component={Input} type={"text"} name={"email"} placeholder={"email"} />
            <Field validate={[requiredField]} component={Input} type={"password"} name={"password"} placeholder={"password"} />
            <div className={Style.checkbox_container}>
              <Field validate={[requiredField]} component={Input} name={"rememberMe"} type={"checkbox"} />
              <p>remember me</p>
            </div>
            {props.error && <div>{props.error}</div>}
            <button>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

export default LoginReduxForm;
