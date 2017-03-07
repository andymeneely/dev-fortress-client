// this is where we'll put the button
import React from 'react';
import { Link } from 'react-router';

const ProfessorViewStyle = {
  width: '100%',
  height: '100%',
};

const ProfessorView = () => (
  <div style={ProfessorViewStyle}>
    <Link to="/professor/createGame">
      Create Game
    </Link>
  </div>
);

export default ProfessorView;
