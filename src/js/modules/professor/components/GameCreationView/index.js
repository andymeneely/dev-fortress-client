import { connect } from 'react-redux';

import GameCreation from './gameCreation';


const MapStateToProps = () => ({});
const MapDispatchToProps = dispatch => ({
  onLoginClick: () => dispatch(),
});

const ConnectedGameCreationView = connect(
  MapStateToProps,
  MapDispatchToProps)(GameCreation);

export default ConnectedGameCreationView;
