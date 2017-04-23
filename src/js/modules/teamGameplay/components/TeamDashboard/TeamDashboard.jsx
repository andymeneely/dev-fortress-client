import React from 'react';
import 'css/teamGameplay.scss';

class TeamDashboard extends React.Component {

  componentDidMount() {
    this.props.loadTeamInfo(this.props.teamId);
  }

  render() {
    if (!this.props.teamName) {
      return (<div>Loading Team Dashboard...</div>);
    }
    return (
      <div className="team-dashboard-container" >
        <div className="team-dashboard-header">
          <div className="header-branding">
            <span>DevFortress</span>
          </div>
          <div className="header-game-name">
            <span className="game-label">Game: </span>
            <span className="game-name">{`Gamename`}</span>
          </div>
        </div>
        <h1>Team Dashboard</h1>
        <h2>{this.props.teamName}</h2>
      </div>
    );
  }
}

TeamDashboard.propTypes = {
  loadTeamInfo: React.PropTypes.func.isRequired,
  teamId: React.PropTypes.number.isRequired,
  teamName: React.PropTypes.string,
};

TeamDashboard.defaultProps = {
  teamName: null,
};

export default TeamDashboard;
