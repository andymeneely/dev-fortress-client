import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import GameDetailView from './GameDetailView';
import {
  loadedGameData,
  loadingGame,
  loadingGameError,
  teamTypes,
  addingTeam,
  teamAddError,
  teamTypesIndex
} from '../../selectors';

import {
  attemptLoadGame,
  attemptLoadTeamTypes,
  attemptAddTeam,
  startGame
} from '../../actions';

const ConnectedGameDetailView = connect(
  createStructuredSelector({
    loadingGameData: loadingGame,
    gameDataError: loadingGameError,
    gameData: loadedGameData,
    teamTypes,
    addingTeam,
    teamAddError,
    teamTypesIndex,
  }),
  dispatch => ({
    loadGameData: gameId => dispatch(attemptLoadGame(gameId)),
    loadTeamTypes: () => dispatch(attemptLoadTeamTypes()),
    addTeam: (tName, tId, gId) => dispatch(attemptAddTeam(tName, tId, gId)),
    startGame: gameId => dispatch(startGame(gameId)),
  })
)(GameDetailView);

export default ConnectedGameDetailView;
