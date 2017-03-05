// this is where we'll put the button
import React from 'react';

import ProfessorView from './ProfessorView';

import { createGame } from '../actions';

ProfessorView = () => (
  <div>
    <button
      onSubmit={createGame}
    />
  </div>
);

ProfessorView.propTypes = {
  onCreateGameSubmit: React.PropTypes.func.isRequired,
};

ProfessorView.defaultProps = {
  onCreateGameSubmit: () => {},
};

export default ProfessorView;
