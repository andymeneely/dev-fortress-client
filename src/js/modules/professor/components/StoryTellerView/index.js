import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StoryTellerView from './StoryTellerView';

const ConnectedStoryTellerView = connect(
  createStructuredSelector({

  }),
  dispatch => ({})
)(StoryTellerView);

export default ConnectedStoryTellerView;
