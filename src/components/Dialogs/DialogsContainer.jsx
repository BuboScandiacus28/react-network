import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {addMessage, updateNewMessageText} from '../../redux/dialogs-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
    messageDate: state.dialogsPage.messageDate,
    dialogDate: state.dialogsPage.dialogDate
  };
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {
  addMessage, updateNewMessageText
})(AuthRedirectComponent);

export default DialogsContainer;
