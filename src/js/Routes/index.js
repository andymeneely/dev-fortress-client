import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import authModule from 'modules/authentication';

import Routes from './Routes';

const ConnectedRoutes = connect(
  createStructuredSelector({
    isInitialized: authModule.selectors.fullInitialization,
  }),
  () => ({})
)(Routes);

export default ConnectedRoutes;
