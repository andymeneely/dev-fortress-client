import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import GameDetailView from './GameDetailView';
import {
  loadedGameData,
  loadingGame,
  loadingGameError
} from '../../selectors';
import { attemptLoadGame, attemptLoadTeamTypes } from '../../actions';

const ConnectedGameDetailView = connect(
  createStructuredSelector({
    loadingGameData: loadingGame,
    gameDataError: loadingGameError,
    gameData: loadedGameData,
  }),
  dispatch => ({
    loadGameData: gameId => dispatch(attemptLoadGame(gameId)),
    loadTeamTypes: () => dispatch(attemptLoadTeamTypes()),
  })
)(GameDetailView);

export default ConnectedGameDetailView;
