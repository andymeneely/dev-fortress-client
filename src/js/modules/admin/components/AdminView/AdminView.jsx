import React from 'react';
import NewUserForm from '../NewUserForm';

const newUserViewStyle = {
  width: '100%',
  height: '100%',
};

function generateMessage(message, success) {
  const messageStyle = {
    color: success ? 'green' : 'red',
  };

  return (
    <span style={messageStyle}>{message}</span>
  );
}

const AdminView = props => (
  <div style={newUserViewStyle}>
    {generateMessage(props.message, props.messageSuccess)}
    <h1>New User</h1>
    <NewUserForm
      onSubmit={props.onNewUserSubmit}
      submitting={props.requestingCreateUser}
      success={props.messageSuccess}
    />
  </div>
);

AdminView.propTypes = {
  onNewUserSubmit: React.PropTypes.func.isRequired,
  requestingCreateUser: React.PropTypes.bool.isRequired,
  message: React.PropTypes.string,
  messageSuccess: React.PropTypes.bool,
};

AdminView.defaultProps = {
  onNewUserSubmit: () => {},
  message: '',
  messageSuccess: true,
};

export default AdminView;
