import React from 'react';

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameValue: '',
      passwordValue: '',
      emailValue: '',
      nameValue: '',
      isAdminValue: false,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  handleFieldChange(event, field) {
    // console.log(event.target.checked);
    this.setState({
      [field]: event.target.value,
    });
  }

  handleCheckChange(event, field) {
    // console.log(event.target.checked);
    this.setState({
      [field]: event.target.checked,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
      this.state.usernameValue,
      this.state.passwordValue,
      this.state.emailValue,
      this.state.nameValue,
      this.state.isAdminValue
    );
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.submitting && this.props.submitting && nextProps.success) {
      this.setState({
        usernameValue: '',
        passwordValue: '',
        emailValue: '',
        nameValue: '',
        isAdminValue: false,
      });
    }
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
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          value={this.state.emailValue}
          onChange={event => this.handleFieldChange(event, 'emailValue')}
          disabled={this.props.submitting}
        />
        <br />
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          value={this.state.nameValue}
          onChange={event => this.handleFieldChange(event, 'nameValue')}
          disabled={this.props.submitting}
        />
        <br />
        <input
          type="checkbox"
          checked={this.state.isAdminValue}
          onChange={event => this.handleCheckChange(event, 'isAdminValue')}
          disabled={this.props.submitting}
        />Make User Admin
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
NewUserForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool,
  success: React.PropTypes.bool
};

NewUserForm.defaultProps = {
  onSubmit: () => {},
  submitting: false,
  success: false,

};

export default NewUserForm;
