import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {addMessage, updateNewMessageText} from '../../redux/dialogs-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
    messageDate: state.dialogsPage.messageDate,
    dialogDate: state.dialogsPage.dialogDate
  };
};

export default compose(
  connect(mapStateToProps, {
    addMessage, updateNewMessageText
  }), 
  withAuthRedirect
)(Dialogs);
