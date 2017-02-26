import React from 'react';

class TokenWatchdog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshTimeout: null,
    };

    this.handleTokenChange = this.handleTokenChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expirationTime !== this.props.expirationTime) {
      this.handleTokenChange(this.props.expirationTime);
    }
  }

  handleTokenChange(expirationTime) {
    let refreshTimeout = null;
    if (this.state.refreshTimeout) clearTimeout(this.state.refreshTimeout);

    if (expirationTime) {
      const expiryDiff = this.props.expirationTime - Math.floor(Date.now() / 1000);
      if (expiryDiff <= 3600000) { // if token expires in less than an hour
        this.props.refreshToken();
      } else {
        refreshTimeout = setTimeout(() => {
          this.props.refreshToken();
        }, 3600000);
      }
    }

    this.setState({
      refreshTimeout,
    });
  }

  render() {
    return React.createElement('div');
  }

}

TokenWatchdog.propTypes = {
  expirationTime: React.PropTypes.number.isRequired,
  refreshToken: React.PropTypes.func.isRequired,
};


export default TokenWatchdog;
