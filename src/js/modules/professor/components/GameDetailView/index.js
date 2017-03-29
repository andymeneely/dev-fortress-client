import GameDetailView from './GameDetailView';
import { connect } from 'react-redux';

const ConnectedGameDetailView = connect()(GameDetailView);

export default ConnectedGameDetailView;
