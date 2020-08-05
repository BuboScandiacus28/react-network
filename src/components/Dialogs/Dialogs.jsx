import React from 'react';
import Style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogElements = props.dialogDate.map(el => {
    return (<Dialog userId={el.userId} title={el.title} />);
  });

  let messageElements = props.messageDate.map(el => {
    return (<Message user={el.user} message={el.message} />);
  });

  let addMessage = () => {
    props.addMessageContainer();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChangeContainer(text);
  };

  return (
    <div className={Style.root}>
      <div className={Style.container}>
        {dialogElements}
      </div>

      <div className={Style.line}></div>

      <div className={Style.dialog_container}>
        <div className={Style.messages_container}>
          <div className={Style.messages_container_wrapper}>
            <ul className="messages_list" id="dialog_#fil_to_#bro">
              {messageElements}
            </ul>
            <div id="scroll"></div>
          </div>
        </div>
        <form className={Style.send_message_form}>
          <div className={Style.send_message_form_wrapper}>
            <textarea onChange={onMessageChange} value={props.newMessageText} className={Style.message_input} placeholder="Вырѣзать посланїѥ... "></textarea>
            <a href="#scroll" onClick={addMessage} className={Style.btn_send_message_container}>
              <div className={Style.btn_send_message}></div>
            </a>
          </div>
        </form>
      </div>

    </div>

  );
};

export default Dialogs;
