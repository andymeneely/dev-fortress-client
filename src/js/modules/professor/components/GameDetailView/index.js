import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import GameDetailView from './GameDetailView';
import {
  loadedGameData,
  loadingGame,
  loadingGameError,
  teamTypes,
  addingTeam,
  teamAddError
} from '../../selectors';

import {
  attemptLoadGame,
  attemptLoadTeamTypes,
  attemptAddTeam
} from '../../actions';

const ConnectedGameDetailView = connect(
  createStructuredSelector({
    loadingGameData: loadingGame,
    gameDataError: loadingGameError,
    gameData: loadedGameData,
    teamTypes,
    addingTeam,
    teamAddError,
  }),
  dispatch => ({
    loadGameData: gameId => dispatch(attemptLoadGame(gameId)),
    loadTeamTypes: () => dispatch(attemptLoadTeamTypes()),
    addTeam: (tName, tId) => dispatch(attemptAddTeam(tName, tId)),
  })
)(GameDetailView);

export default ConnectedGameDetailView;
