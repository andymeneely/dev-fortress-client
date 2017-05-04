import React from 'react';
import 'css/teamGameplay.scss';

import DashboardHeader from './subcomponents/DashboardHeader';
import StatusBar from './subcomponents/StatusBar';
import TeamSidebar from '../TeamSidebar';
import ActionGrid from '../ActionGrid';

class TeamDashboard extends React.Component {

  componentDidMount() {
    this.props.loadTeamInfo(this.props.teamId);
    this.props.loadTeamTypes();
    this.props.loadActions();
    this.props.authTeamSocket();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gameId && nextProps.gameId !== this.props.gameId) {
      this.props.loadGameInfo(nextProps.gameId);
    }
  }

  render() {
    if (!this.props.teamName && !this.props.socketAuthenticated) {
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
            <ActionGrid
              actionsIndex={this.props.actionsIndex}
              selectedActions={this.props.selectedActions}
              pastActions={this.props.pastActions}
              remainingDevcaps={this.props.teamDevCaps - this.props.spentDevcaps}
            />
          </div>
          <div className="sidebar-container">
            <div className="sidebar-container-container">
              <TeamSidebar
                spentDevCaps={this.props.spentDevcaps}
              />

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
  loadActions: React.PropTypes.func.isRequired,
  loadTeamTypes: React.PropTypes.func.isRequired,
  authTeamSocket: React.PropTypes.func.isRequired,
  teamId: React.PropTypes.number.isRequired,
  teamName: React.PropTypes.string,
  teamTypeName: React.PropTypes.string,
  gameId: React.PropTypes.number,
  gameName: React.PropTypes.string,
  currentRound: React.PropTypes.number,
  teamDevCaps: React.PropTypes.number,
  teamMindset: React.PropTypes.number,
  actionsIndex: React.PropTypes.objectOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      name: React.PropTypes.string,
      description: React.PropTypes.string,
      devcaps_cost: React.PropTypes.number,
      mindset_reward: React.PropTypes.number,
    })
  ),
  selectedActions: React.PropTypes.objectOf(React.PropTypes.bool).isRequired,
  pastActions: React.PropTypes.objectOf(React.PropTypes.bool).isRequired,
  spentDevcaps: React.PropTypes.number.isRequired,
  socketAuthenticated: React.PropTypes.bool.isRequired,
};

TeamDashboard.defaultProps = {
  teamName: null,
  teamTypeName: null,
  gameId: null,
  gameName: null,
  teamDevCaps: null,
  teamMindset: null,
  currentRound: null,
  actionsIndex: null,
};

export default TeamDashboard;
