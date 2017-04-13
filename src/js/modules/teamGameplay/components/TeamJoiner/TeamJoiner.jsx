import React from 'react';
import { browserHistory } from 'react-router';

class TeamJoiner extends React.Component {

  componentWillMount() {
    // if youre already logged in just go to your dashboard
    if (this.props.teamId != null) {
      browserHistory.replace('/game');
    }
    this.props.authenticateTeam(this.props.routeParams.teamCode);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.teamId != null) {
      browserHistory.replace('/game');
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
  // loadTeamInfo: React.PropTypes.func.isRequired,
  teamId: React.PropTypes.number,
  routeParams: React.PropTypes.shape({
    teamCode: React.PropTypes.string,
  }).isRequired,
};

TeamJoiner.defaultProps = {
  teamId: null,
  teamGameId: null,
};

export default TeamJoiner;
