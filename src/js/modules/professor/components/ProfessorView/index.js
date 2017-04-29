import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ProfessorView from './ProfessorView';
import { attemptLoadMyGames, startGame } from '../../actions';
import {
  myGames,
  loadingMyGames
} from '../../selectors';

const ConnectedProfessorView = connect(
  createStructuredSelector({
    myGames,
    loadingGames: loadingMyGames,
  }),
  dispatch => ({
    loadGames: () => dispatch(attemptLoadMyGames()),
    startGame: () => dispatch(startGame()),
  })
)(ProfessorView);

export default ConnectedProfessorView;
