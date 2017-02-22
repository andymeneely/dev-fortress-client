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
  }

  handleFieldChange(event, field) {
    this.setState({
      [field]: event.target.value,
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
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          type="password"
          value={this.state.passwordValue}
          onChange={event => this.handleFieldChange(event, 'passwordValue')}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          value={this.state.emailValue}
          onChange={event => this.handleFieldChange(event, 'emailValue')}
        />
        <br />
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          value={this.state.nameValue}
          onChange={event => this.handleFieldChange(event, 'nameValue')}
        />
        <br />
        <input
          type="checkbox"
          value={this.state.isAdminValue}
        />Make User Admin
        <br />
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
NewUserForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

NewUserForm.defaultProps = {
  onSubmit: () => {},
};

export default NewUserForm;
