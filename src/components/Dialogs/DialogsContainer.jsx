import React from 'react';
import Dialogs from './Dialogs';

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

const DialogsContainer = (props) => {

  let state = props.store.getState();

  let addMessageContainer = () => {
    if (state.dialogsPage.newMessageText === '') return false;
    props.store.dispatch(addMessageActionCreater());
  };

  let onMessageChangeContainer = (text) => {
    const action = updateNewMessageTextActionCreater(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs addMessageContainer={addMessageContainer} onMessageChangeContainer={onMessageChangeContainer} newMessageText={state.dialogsPage.newMessageText} messageDate={state.dialogsPage.messageDate} dialogDate={state.dialogsPage.dialogDate} />
  );
}

export default DialogsContainer;
