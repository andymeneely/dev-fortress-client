import React from 'react';
import CreateGameForm from '../CreateGameForm';

const GameCreationView = props => (
  <div>
    <h1>Create New Game</h1>
    <CreateGameForm
      onSubmit={props.onFormSubmit}
    />
  </div>

);


GameCreationView.propTypes = {
  onFormSubmit: React.PropTypes.func,
};

GameCreationView.defaultProps = {
  onFormSubmit: () => {},
};


export default GameCreationView;
