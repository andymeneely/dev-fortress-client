import { connect } from 'react-redux';
import AdminView from './AdminView';
import { requestCreateUser } from '../../actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  onNewUserSubmit: (...params) => dispatch(requestCreateUser(...params)),
});

const ConnectedAdminView = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminView);


export default ConnectedAdminView;

