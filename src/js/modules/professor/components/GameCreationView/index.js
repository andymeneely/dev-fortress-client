import { connect } from 'react-redux';

import GameCreationView from './gameCreationView';


const MapStateToProps = () => ({});
const MapDispatchToProps = dispatch => ({
  onLoginClick: () => dispatch(),
});

const ConnectedGameCreationView = connect(
  MapStateToProps,
  MapDispatchToProps)(GameCreationView);

export default ConnectedGameCreationView;
