import React from 'react';
import 'css/teamGameplay.scss';

import DashboardHeader from './subcomponents/DashboardHeader';

class TeamDashboard extends React.Component {

  componentDidMount() {
    this.props.loadTeamInfo(this.props.teamId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gameId && nextProps.gameId !== this.props.gameId) {
      this.props.loadGameInfo(nextProps.gameId);
    }
  }

  render() {
    if (!this.props.teamName) {
      return (<div>Loading Team Dashboard...</div>);
    }
    return (
      <div className="team-dashboard-container" >
        <DashboardHeader
          gameName={this.props.gameName || 'Loading...'}
        />
        <h1>Team Dashboard</h1>
        <h2>{this.props.teamName}</h2>
      </div>
    );
  }
}

TeamDashboard.propTypes = {
  loadTeamInfo: React.PropTypes.func.isRequired,
  loadGameInfo: React.PropTypes.func.isRequired,
  teamId: React.PropTypes.number.isRequired,
  teamName: React.PropTypes.string,
  gameId: React.PropTypes.number,
  gameName: React.PropTypes.string,
};

TeamDashboard.defaultProps = {
  teamName: null,
  gameId: null,
  gameName: null,
};

export default TeamDashboard;
