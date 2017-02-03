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

const NavigationBar = props => (
  <div className="navigation-bar" style={navigationBarStyle}>
    <ul style={navigationListStyle}>
      {props.links.map(createNavigationLink)}
    </ul>
  </div>
);

NavigationBar.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.object),
};

NavigationBar.defaultProps = {
  links: [],
};

export default NavigationBar;
