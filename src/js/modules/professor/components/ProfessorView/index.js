import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ProfessorView from './ProfessorView';
import { attemptLoadMyGames } from '../../actions';
import {
  myGames,
  loadingMyGames,
  myGamesError
} from '../../selectors';

const ConnectedProfessorView = connect(
  createStructuredSelector({
    myGames,
    loadingGames: loadingMyGames,
  }),
  dispatch => ({
    loadGames: () => dispatch(attemptLoadMyGames()),
  })
)(ProfessorView);

export default ConnectedProfessorView;
