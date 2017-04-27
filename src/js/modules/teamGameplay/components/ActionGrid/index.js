import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  actionsLoaded
} from '../../selectors';
import {
  toggleAction
} from '../../actions';
import ActionGrid from './ActionGrid';

const ConnectedActionGrid = connect(
  () => createStructuredSelector({
    actionsLoaded,
  }),
  dispatch => ({
    toggleAction: id => dispatch(toggleAction(id)),
  })
)(ActionGrid);

export default ConnectedActionGrid;
