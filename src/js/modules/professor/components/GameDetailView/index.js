import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import GameDetailView from './GameDetailView';
import {
  loadedGameData,
  loadingGame,
  loadingGameError
} from '../../selectors';
import { attemptLoadGame } from '../../actions';

const ConnectedGameDetailView = connect(
  createStructuredSelector({
    loadingGameData: loadingGame,
    gameDataError: loadingGameError,
    gameData: loadedGameData,
  }),
  dispatch => ({
    loadGameData: gameId => dispatch(attemptLoadGame(gameId)),
  })
)(GameDetailView);

export default ConnectedGameDetailView;
