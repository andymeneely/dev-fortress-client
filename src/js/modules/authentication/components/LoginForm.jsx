import React from 'react';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameValue: '',
      passwordValue: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      usernameValue: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      passwordValue: event.target.value,
    });
  }

  handleLoginClick() {
    this.props.onLoginClick(
      this.state.usernameValue,
      this.state.passwordValue
    );
  }

  render() {
    return (
      <div>
        <h3>Username</h3>
        <input
          type="text"
          value={this.state.usernameValue}
          onChange={this.handleUsernameChange}
        />
        <h3>Password</h3>
        <input
          type="password"
          value={this.state.passwordValue}
          onChange={this.handlePasswordChange}
        />
        <button onClick={this.handleLoginClick} >Login</button>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onLoginClick: React.PropTypes.func.isRequired,
};

export default LoginForm;
