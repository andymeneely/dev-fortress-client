import React from 'react';

const DashboardHeader = props => (
  <div className="team-dashboard-header">
    <div className="header-branding">
      <span>DevFortress</span>
    </div>
    <div className="header-game-name">
      <span className="game-label">Game: </span>
      <span className="game-name">{props.gameName}</span>
    </div>
  </div>
);

DashboardHeader.propTypes = {
  gameName: React.PropTypes.string,
};

DashboardHeader.defaultProps = {
  gameName: 'Loading...',
};

export default DashboardHeader;

