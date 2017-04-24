import React from 'react';

const StatusBar = props => (
  <div className="team-status-bar">
    <div className="status-title-container">
      <div className="team-name-container">
        <h1>{props.teamName}</h1>
        <h2>{props.teamTypeName}</h2>
      </div>
      <div className="round-count-container">
        <h1 className="curr-round">Month {props.currentRound}</h1>
      </div>
    </div>
    <div className="team-stats-container">
      <div className="stat-container">
        <h3 className="title">
          DevCaps
        </h3>
        <div className="count-container">
          <span>{props.teamDevCaps}</span>
        </div>
      </div>
      <div className="stat-container">
        <h3 className="title">
          Hacker Mindset
        </h3>
        <div className="count-container">
          <span>{props.teamMindset}</span>
        </div>
      </div>
    </div>
  </div>
);

StatusBar.propTypes = {
  currentRound: React.PropTypes.number,
  teamName: React.PropTypes.string,
  teamTypeName: React.PropTypes.string,
  teamDevCaps: React.PropTypes.number,
  teamMindset: React.PropTypes.number,
};

StatusBar.defaultProps = {
  currentRound: null,
  teamName: null,
  teamTypeName: null,
  teamDevCaps: null,
  teamMindset: null,
};

export default StatusBar;
