import { connect } from 'react-redux';
import ProfessorView from './ProfessorView';
import { createGame } from '../actions';

const MapStateToProps = () => ({});
const MapDispatchToProps = dispatch => ({
  onLoginClick: () => dispatch(createGame()),
});

const ConnectedProfessorView = connect(
  MapStateToProps,
  MapDispatchToProps
)(ProfessorView);

export default ConnectedProfessorView;
