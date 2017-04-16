import React from 'react';

class TeamDashboard extends React.Component {

  componentDidMount() {
    this.props.loadTeamInfo(this.props.teamId);
  }

  componentDidUpdate(prevProps, prevState) {
    // attempt to connect to socket
    
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
  teamId: React.PropTypes.number.isRequired,
  teamName: React.PropTypes.string,
};

TeamDashboard.defaultProps = {
  teamName: null,
};

export default TeamDashboard;
