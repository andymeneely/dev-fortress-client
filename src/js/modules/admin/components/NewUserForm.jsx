import React from 'react';

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameValue: '',
      passwordValue: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRegistrationClick = this.handleRegistrationClick.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      usernameValue: event.target.value,
    });
  }

  handleRegistrationClick(event) {
    this.props.onRegisterUserClick();
  }

  handlePasswordChange(event) {
    this.props.onRegisterUserClick();
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
      </div>
    );
  }
}
NewUserForm.propTypes = {
  onRegisterUserClick: React.PropTypes.func.isRequired,
};

NewUserForm.defaultProps = {
  onRegisterUserClick: () => {}
};

export default NewUserForm;
