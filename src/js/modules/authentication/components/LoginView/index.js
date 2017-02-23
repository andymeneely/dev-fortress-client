import { connect } from 'react-redux';

import LoginView from './LoginView';

import { requestLogin } from '../../actions';

const MapStateToProps = () => ({});
const MapDispatchToProps = dispatch => ({
  onLoginClick: (username, password) => dispatch(requestLogin(username, password)),
});

const ConnectedLoginView = connect(
  MapStateToProps,
  MapDispatchToProps)(LoginView);

export default ConnectedLoginView;
