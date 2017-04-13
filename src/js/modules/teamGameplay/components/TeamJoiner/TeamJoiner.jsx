import React from 'react';

class TeamJoiner extends React.Component {

  componentWillMount() {
    if (this.props.teamDataLoaded) {
      // todo redirect to game view
    }

    if (!this.props.teamId) {
      this.props.authenticateTeam(this.props.routeParams.teamCode);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if ((this.props.teamId != null) && this.props.teamId !== prevProps.teamId) {
      this.props.loadTeamInfo(this.props.teamId);
    }

    if (this.props.teamDataLoaded) {
      // todo redirect to game view
    }
  }

  render() {
    return (
      <div>
        Joining Team...
      </div>
    );
  }
}

TeamJoiner.propTypes = {
  authenticateTeam: React.PropTypes.func.isRequired,
  loadTeamInfo: React.PropTypes.func.isRequired,
  teamId: React.PropTypes.number,
  routeParams: React.PropTypes.shape({
    teamCode: React.PropTypes.string,
  }).isRequired,
  teamDataLoaded: React.PropTypes.bool.isRequired,
};

TeamJoiner.defaultProps = {
  teamId: null,
};

export default TeamJoiner;
