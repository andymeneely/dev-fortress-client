import React from 'react';

class TeamJoiner extends React.Component {

  componentWillMount() {
    this.props.authenticateTeam(this.props.routeParams.teamCode);
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
  teamToken: React.PropTypes.string,
  routeParams: React.PropTypes.shape({
    teamCode: React.PropTypes.string,
  }).isRequired,
};

TeamJoiner.defaultProps = {
  teamToken: null,
};

export default TeamJoiner;
