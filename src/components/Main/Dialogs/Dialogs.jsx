import React from 'react';
import Style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

let addMessageActionCreater = () => {
  return {
      type: 'ADD-MESSAGE'
  }
};

let updateNewMessageTextActionCreater = (text) => {
  return {
      type: 'UPDATE-NEW-MESSAGE-TEXT',
      newText: text
  }
};

const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogDate.map(el => {
    return <Dialog userId={el.userId} title={el.title} />
  });

  let messageElements = props.dialogsPage.messageDate.map(el => {
    return <Message user={el.user} message={el.message} />
  });

  let newMessageElement = React.createRef();

  let addMessage = () => {
    if (props.dialogsPage.newMessageText === '') return false;
    props.dispatch(addMessageActionCreater());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    const action = updateNewMessageTextActionCreater(text);
    props.dispatch(action);
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
            <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText} ref={newMessageElement} className={Style.message_input} placeholder="Вырѣзать посланїѥ... "></textarea>
            <a href="#scroll" onClick={addMessage} className={Style.btn_send_message_container}>
              <div className={Style.btn_send_message}></div>
            </a>
          </div>
        </form>
      </div>

    </div>

  );
}

export default Dialogs;
