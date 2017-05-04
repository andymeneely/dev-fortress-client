import React from 'react';

class TeamDashboard extends React.Component {

  componentDidMount() {
    this.props.loadTeamInfo(this.props.teamId);
    this.props.authTeamSocket();
  }

  render() {
    if (!this.props.teamName && !this.props.socketAuthenticated) {
      return (<div>Loading Team Dashboard...</div>);
    }
    return (
      <div>
        <h1>Team Dashboard</h1>
        <h2>{this.props.teamName}</h2>
      </div>
    );
  }
}

TeamDashboard.propTypes = {
  loadTeamInfo: React.PropTypes.func.isRequired,
  authTeamSocket: React.PropTypes.func.isRequired,
  teamId: React.PropTypes.number.isRequired,
  teamName: React.PropTypes.string,
  socketAuthenticated: React.PropTypes.bool.isRequired,
};

TeamDashboard.defaultProps = {
  teamName: null,
};

export default TeamDashboard;
