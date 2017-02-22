import React from 'react';
import NewUserForm from '../NewUserForm';

const newUserViewStyle = {
  width: '100%',
  height: '100%',
};

const AdminView = props => (
  <div style={newUserViewStyle}>
    <h1>New User</h1>
    <NewUserForm {...props} />
  </div>
);

AdminView.propTypes = {
  onRegisterUserClick: React.PropTypes.func.isRequired,
};

AdminView.defaultProps = {
  onRegisterUserClick: () => {},
};

export default AdminView;
