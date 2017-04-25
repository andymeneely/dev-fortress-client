import React from 'react';
import 'css/teamGameplay.scss';

import DashboardHeader from './subcomponents/DashboardHeader';
import StatusBar from './subcomponents/StatusBar';
import TeamSidebar from '../TeamSidebar';

class TeamDashboard extends React.Component {

  componentDidMount() {
    this.props.loadTeamInfo(this.props.teamId);
    this.props.loadTeamTypes();
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
        <StatusBar
          teamName={this.props.teamName}
          teamTypeName={this.props.teamTypeName}
          teamDevCaps={this.props.teamDevCaps}
          teamMindset={this.props.teamMindset}
          currentRound={this.props.currentRound}
        />
        <div className="dashboard-workspace-area">
          <div className="workspace-container">
          </div>
          <div className="sidebar-container">
            <div className="sidebar-container-container">
              <TeamSidebar />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

TeamDashboard.propTypes = {
  loadTeamInfo: React.PropTypes.func.isRequired,
  loadGameInfo: React.PropTypes.func.isRequired,
  loadTeamTypes: React.PropTypes.func.isRequired,
  teamId: React.PropTypes.number.isRequired,
  teamName: React.PropTypes.string,
  teamTypeName: React.PropTypes.string,
  gameId: React.PropTypes.number,
  gameName: React.PropTypes.string,
  currentRound: React.PropTypes.number,
  teamDevCaps: React.PropTypes.number,
  teamMindset: React.PropTypes.number,
};

TeamDashboard.defaultProps = {
  teamName: null,
  teamTypeName: null,
  gameId: null,
  gameName: null,
  teamDevCaps: null,
  teamMindset: null,
  currentRound: null,
};

export default TeamDashboard;
