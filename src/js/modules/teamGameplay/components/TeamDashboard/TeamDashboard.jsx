import React from 'react';

class TeamDashboard extends React.Component {

  componentDidMount() {
    console.log("Load team dash")
    this.props.loadTeamInfo(this.props.teamId);
  }

  render() {
    if (!this.props.teamName) {
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
  teamId: React.PropTypes.number,
  teamName: React.PropTypes.string,
};

export default TeamDashboard;
