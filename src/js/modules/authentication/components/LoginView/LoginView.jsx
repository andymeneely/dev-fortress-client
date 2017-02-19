import React from 'react';
import LoginForm from '../LoginForm';

const loginViewStyle = {
  width: '100%',
  height: '100%',
};

const LoginView = props => (
  <div style={loginViewStyle}>
    <h1>Login</h1>
    <LoginForm {...props} />
  </div>
);

LoginView.propTypes = {
  onLoginClick: React.PropTypes.func.isRequired,
};

export default LoginView;
