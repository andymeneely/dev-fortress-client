import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  actionsIndex,
  actionsLoaded
} from '../../selectors';
import ActionGrid from './ActionGrid';

const ConnectedActionGrid = connect(
  () => createStructuredSelector({
    actionsIndex,
    actionsLoaded,
  }),
  () => ({})
)(ActionGrid);

export default ConnectedActionGrid;
