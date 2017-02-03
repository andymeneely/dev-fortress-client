

import React from 'react';
import NavigationBar from './navigationBar';

const links = [
  {
    to: '/',
    name: 'react-redux-starter',
  },
  {
    to: '/counter',
    name: 'Counter',
  },
];

class NavigationFrame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
            // set initial state
    };
  }

  render() {
    return (
      <div>
        <NavigationBar
          links={links}
        />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}


NavigationFrame.propTypes = {
    // proptypes
};

export default NavigationFrame;
