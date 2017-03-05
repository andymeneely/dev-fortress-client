import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { requestRefreshToken, attemptLoadToken } from '../../actions';
import { jwtExpiration } from '../../selectors';
import TokenWatchdog from './TokenWatchdog';

const mapStateToProps = createStructuredSelector({
  expirationTime: jwtExpiration,
});

const mapDispatchToProps = dispatch => ({
  refreshToken: () => dispatch(requestRefreshToken()),
  loadToken: () => dispatch(attemptLoadToken()),
});

const ConnectedTokenWatchdog = connect(
  mapStateToProps,
  mapDispatchToProps
)(TokenWatchdog);

export default ConnectedTokenWatchdog;
