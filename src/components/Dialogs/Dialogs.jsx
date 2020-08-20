import React from 'react';
import Style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import DialogsReduxForm from './DialogsForm/DialogsForm';

const Dialogs = ({dialogDate, messageDate, addMessage}) => {

  let dialogElements = dialogDate.map(el => <Dialog userId={el.userId} title={el.title} />);

  let messageElements = messageDate.map(el => <Message user={el.user} message={el.message} />);

  const onSubmit = (formData) => addMessage(formData.textMessage);

  return (
    <div className={Style.root}>
      <div className={Style.container}>
        {dialogElements}
      </div>

      <div className={Style.line}></div>

      <div className={Style.dialog_container}>
        <div className={Style.messages_container}>
          <div className={Style.messages_container_wrapper}>
            <ul className="messages_list">
              {messageElements}
            </ul>
          </div>
        </div>
        <DialogsReduxForm onSubmit={onSubmit} />
      </div>

    </div>

  );
};

export default Dialogs;
