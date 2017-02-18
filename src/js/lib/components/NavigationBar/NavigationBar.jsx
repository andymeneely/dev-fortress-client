import React from 'react';
import { Link } from 'react-router';

const navigationBarStyle = {
  display: 'block',
  padding: '0 50px',
};

const navigationListStyle = {
  width: '50%',
  display: 'inline-block',
  padding: 0,
  margin: 0,
  listStyle: 'none',
};

const navigationLinkStyle = {
  cursor: 'pointer',
  display: 'block',
  height: '100%',
  padding: '15px 10px',
  textDecoration: 'none',
  textAlign: 'center',
  WebkitUserSelect: 'none', /* webkit (safari, chrome) browsers */
  MozUserSelect: 'none', /* mozilla browsers */
  KhtmlUserSelect: 'none', /* webkit (konqueror) browsers */
  MsUserSelect: 'none',
};

function createNavigationLink(linkData) {
  return (
    <li style={{ display: 'inline-block' }} key={linkData.name}>
      <Link style={navigationLinkStyle} to={linkData.to}>{linkData.name}</Link>
    </li>
  );
}

function createLoginLink(isAuthenticated, logout) {
  if (isAuthenticated) {
    // return the logout link
    return (
      <Link
        onClick={logout}
        style={navigationLinkStyle}
        to="/"
      >
        Logout
      </Link>
    );
  }
  // return the login link
  return (
    <Link
      style={navigationLinkStyle}
      to="/login"
    >
      Login
    </Link>
  );
}

const NavigationBar = props => (
  <div className="navigation-bar" style={navigationBarStyle}>
    <ul style={navigationListStyle}>
      {props.links.map(createNavigationLink)}
    </ul>
    <ul style={Object.assign({}, navigationListStyle, { textAlign: 'right' })}>
      <li style={{ display: 'inline-block' }}>
        {createLoginLink(props.isAuthenticated, props.logout)}
      </li>
    </ul>
  </div>
);

NavigationBar.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.object),
  isAuthenticated: React.PropTypes.bool.isRequired,
  logout: React.PropTypes.func.isRequired,
};

NavigationBar.defaultProps = {
  links: [],
  logout: () => {},
};

export default NavigationBar;
