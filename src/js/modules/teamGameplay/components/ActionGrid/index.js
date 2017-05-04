import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  actionsLoaded
} from '../../selectors';
import {
  selectAction,
  deselectAction
} from '../../actions';
import ActionGrid from './ActionGrid';

const ConnectedActionGrid = connect(
  () => createStructuredSelector({
    actionsLoaded,
  }),
  dispatch => ({
    selectAction: id => dispatch(selectAction(id)),
    deselectAction: id => dispatch(deselectAction(id)),
  })
)(ActionGrid);

export default ConnectedActionGrid;
