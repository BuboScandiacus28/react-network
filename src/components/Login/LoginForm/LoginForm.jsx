import React from 'react';
import Style from './LoginForm.module.css';
import {reduxForm} from 'redux-form';
import {Input, createField} from '../../common/FormControls/FormControls';
import {requiredField} from '../../../utils/validators/validator';

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField([requiredField], Input, "email", "email", {type: "text"})}
            {createField([requiredField], Input, "password", "password", {type: "password"})}
            <div className={Style.checkbox_container}>
              {createField([requiredField], Input, "rememberMe", null, {type: "checkbox"})}
              <p>remember me</p>
            </div>
            {error && <div>{error}</div>}
            <button>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

export default LoginReduxForm;
