import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import GameCreationView from './gameCreationView';
import {
  creatingGameSelector,
  gameCreationErrorSelector
} from '../../selectors';
import { attemptCreateGame } from '../../actions';


const MapStateToProps = createStructuredSelector({
  submitting: creatingGameSelector,
  errorMessage: gameCreationErrorSelector,
});
const MapDispatchToProps = dispatch => ({
  onFormSubmit: (name, numRounds) => dispatch(
    attemptCreateGame(name, numRounds)
  ),
});

const ConnectedGameCreationView = connect(
  MapStateToProps,
  MapDispatchToProps)(GameCreationView);

export default ConnectedGameCreationView;
