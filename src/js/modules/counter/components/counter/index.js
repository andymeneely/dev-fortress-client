

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Counter from './counter';
import * as actions from '../../actions';
import { totalClicksSelector, counterValueSelector } from '../../selectors';

export default connect(
    createStructuredSelector({
      counterValue: counterValueSelector,
      totalClicks: totalClicksSelector,
    }),
    dispatch => ({
      onPlusClick: () => dispatch(actions.incrementCounter()),
      onSubClick: () => dispatch(actions.decrementCounter()),
      onResetClick: () => dispatch(actions.resetCounter()),
    }),
)(Counter);
