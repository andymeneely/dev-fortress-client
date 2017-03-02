import React from 'react';

class TokenWatchdog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshTimeout: null,
    };

    this.handleTokenChange = this.handleTokenChange.bind(this);
  }

  componentDidMount() {
    // this.handleTokenChange(this.props.expirationTime);
    this.props.loadToken();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expirationTime !== this.props.expirationTime) {
      this.handleTokenChange(nextProps.expirationTime);
    }
  }

  handleTokenChange(expirationTime) {
    let refreshTimeout = null;
    if (this.state.refreshTimeout) clearTimeout(this.state.refreshTimeout);

    if (expirationTime) {
      const expiryDiff = expirationTime - (Math.floor(Date.now() / 1000));
      if (expiryDiff <= 36000) { // if token expires in less than an hour
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
  expirationTime: React.PropTypes.number,
  refreshToken: React.PropTypes.func.isRequired,
  loadToken: React.PropTypes.func.isRequired,
};

TokenWatchdog.defaultProps = {
  expirationTime: 0,
};


export default TokenWatchdog;
