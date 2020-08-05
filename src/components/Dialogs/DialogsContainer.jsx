import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {addMessageActionCreater, updateNewMessageTextActionCreater} from '../../redux/dialogs-reducer';

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
    messageDate: state.dialogsPage.messageDate,
    dialogDate: state.dialogsPage.dialogDate 
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessageContainer: () => {
      dispatch(addMessageActionCreater());
    },
    onMessageChangeContainer: (text) => {
      dispatch(updateNewMessageTextActionCreater(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
