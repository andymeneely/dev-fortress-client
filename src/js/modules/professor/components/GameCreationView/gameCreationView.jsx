import React from 'react';
import CreateGameForm from '../CreateGameForm';

const GameCreationView = props => (
  <div>
    <h1>Create New Game</h1>
    {props.errorMessage ?
      (
        <span style={{ color: 'red' }}>
          {props.errorMessage}
        </span>
      )
    : null}
    <CreateGameForm
      onSubmit={props.onFormSubmit}
      disabled={props.submitting}
    />
  </div>

);


GameCreationView.propTypes = {
  onFormSubmit: React.PropTypes.func,
  submitting: React.PropTypes.bool.isRequired,
  errorMessage: React.PropTypes.string,
};

GameCreationView.defaultProps = {
  onFormSubmit: () => {},
  errorMessage: '',
};


export default GameCreationView;
