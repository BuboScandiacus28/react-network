import React from 'react';
import Style from './DialogsForm.module.css';
import {reduxForm} from 'redux-form';
import {Textarea, createField} from '../../common/FormControls/FormControls';
import {maxLengthTh, requiredField} from '../../../utils/validators/validator';

const maxLength100 = maxLengthTh(100);

const DialogsForm = ({handleSubmit}) => {
  return (
    <form className={Style.send_message_form} onSubmit={handleSubmit}>
      <div className={Style.send_message_form_wrapper}>
        {createField([requiredField, maxLength100], Textarea, "textMessage", "Вырѣзать посланїѥ... ", {className: Style.message_input})}
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
