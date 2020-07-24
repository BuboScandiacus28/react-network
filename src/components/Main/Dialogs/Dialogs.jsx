import React from 'react';
import Style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogElements = props.dialogsDate.dialogDate.map(el => {
    return <Dialog userId={el.userId} title={el.title} />
  });
  
  let messageElements = props.dialogsDate.messageDate.map(el => {
    return <Message user={el.user} message={el.message} />
  });
  
  return (
    <div className={Style.root}>
      <div className={Style.container}>
        {dialogElements}
      </div>

      <div className={Style.line}></div>

      <div className={Style.messages_container}>
        <ul className="messages_list">
          {messageElements}
        </ul>
      </div>

    </div>

  );
}

export default Dialogs;
