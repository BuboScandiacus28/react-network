import React from 'react';
import Style from './DialogsForm.module.css';
import {reduxForm, Field} from 'redux-form';
import {Textarea} from '../../common/FormControls/FormControls';
import {maxLengthTh, requiredField} from '../../../utils/validators/validator';

const maxLength100 = maxLengthTh(100);

const DialogsForm = (props) => {
  return (
    <form className={Style.send_message_form} onSubmit={props.handleSubmit}>
      <div className={Style.send_message_form_wrapper}>
        <Field validate={[requiredField, maxLength100]} name={"textMessage"} component={Textarea} className={Style.message_input} placeholder="Вырѣзать посланїѥ... "></Field>
        <div className={Style.btn_send_message_container}>
          <button className={Style.btn_send_message}></button>
        </div>
      </div>
    </form>
  );
};

const DialogsReduxForm = reduxForm({
  form: "dialogs"
})(DialogsForm);

export default DialogsReduxForm;
