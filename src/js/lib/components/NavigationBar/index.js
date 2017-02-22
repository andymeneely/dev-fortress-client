import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import AuthenticationModule from 'modules/authentication';
import NavigationBar from './NavigationBar';

const mapStateToProps = createStructuredSelector({
  isAuthenticated: AuthenticationModule.selectors.isAuthenticated,
  isAdmin: AuthenticationModule.selectors.isAdmin,
});


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(AuthenticationModule.actions.logout()),
});


const ConnectedNavigationBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);

export default ConnectedNavigationBar;
