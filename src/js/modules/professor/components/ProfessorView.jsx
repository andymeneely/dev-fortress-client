// this is where we'll put the button
import React from 'react';
import { link } from 'react-router';

const ProfessorViewStyle = {
  width: '100%',
  height: '100%',
};

const ProfessorView = () => (
  <div style={ProfessorViewStyle}>
    <link to="/professor/createGame">
      Create Game
    </link>
  </div>
);

export default ProfessorView;
