import React from 'react';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameValue: '',
      passwordValue: '',
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.submitting && this.props.submitting && nextProps.success) {
      this.setState({
        usernameValue: '',
        passwordValue: '',
      });
    }
  }

  handleFieldChange(event, field) {
    this.setState({
      [field]: event.target.value,
    });
  }

  handleCheckChange(event, field) {
    this.setState({
      [field]: event.target.checked,
    });
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
  handleFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
      this.state.usernameValue,
      this.state.passwordValue
    );
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          id="username"
          type="text"
          value={this.state.usernameValue}
          onChange={event => this.handleFieldChange(event, 'usernameValue')}
          disabled={this.props.submitting}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          type="password"
          value={this.state.passwordValue}
          onChange={event => this.handleFieldChange(event, 'passwordValue')}
          disabled={this.props.submitting}
        />
        <br />
        <button onSubmit={this.handleFormSubmit}> Login </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool,
  success: React.PropTypes.bool, // eslint-disable-line react/no-unused-prop-types

};

LoginForm.defaultProps = {
  onSubmit: () => {},
  submitting: false,
  success: false,
};

export default LoginForm;
