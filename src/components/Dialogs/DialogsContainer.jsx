import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {addMessage} from '../../redux/dialogs-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state) => {
  return {
    messageDate: state.dialogsPage.messageDate,
    dialogDate: state.dialogsPage.dialogDate
  };
};

export default compose(
  connect(mapStateToProps, {
    addMessage
  }), 
  withAuthRedirect
)(Dialogs);
