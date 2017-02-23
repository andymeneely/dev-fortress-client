import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AdminView from './AdminView';
import { requestCreateUser } from '../../actions';
import {
  requestingCreateUser,
  message,
  messageSuccess,
} from '../../selectors';

const mapStateToProps = createStructuredSelector({
  requestingCreateUser,
  message,
  messageSuccess,
});
const mapDispatchToProps = dispatch => ({
  onNewUserSubmit: (...params) => dispatch(requestCreateUser(...params)),
});

const ConnectedAdminView = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminView);


export default ConnectedAdminView;

