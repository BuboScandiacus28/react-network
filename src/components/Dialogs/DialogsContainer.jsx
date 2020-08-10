import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {addMessage, updateNewMessageText} from '../../redux/dialogs-reducer';

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
    messageDate: state.dialogsPage.messageDate,
    dialogDate: state.dialogsPage.dialogDate,
    isAuth: state.auth.isAuth
  };
};

const DialogsContainer = connect(mapStateToProps, {
  addMessage, updateNewMessageText
})(Dialogs);

export default DialogsContainer;
