import React from 'react';
import Style from './LoginForm.module.css';
import { reduxForm } from 'redux-form';
import { Input, createField } from '../../common/FormControls/FormControls';
import { requiredField } from '../../../utils/validators/validator';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {

  const captchaToHTML = (captcha) => {
    if (captcha !== null) {
      return (
        <div className={Style.captcha_container}>
          <img src={captcha} alt="Каптча" />
          {createField([requiredField], Input, "captcha", "captcha", { type: "text" })}
        </div>
      )
    } else return null;
  }

  return (
    <form className={Style.login_form} onSubmit={handleSubmit}>
      {createField([requiredField], Input, "email", "email", { type: "text" })}
      {createField([requiredField], Input, "password", "password", { type: "password" })}
      <div className={Style.checkbox_container}>
        {createField([requiredField], Input, "rememberMe", null, { type: "checkbox" })}
        <p>remember me</p>
      </div>
      {captchaToHTML(captchaUrl)}
      {error && <div>{error}</div>}
      <button>Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

export default LoginReduxForm;
