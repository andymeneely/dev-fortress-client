import React from 'react';
import AddTeamForm from './subcomponents/AddTeamForm';
import { TeamTypeArray, gameDataShape } from '../propTypes';

function makeTeamPanel(teamData) {
  return (
    <div>
      <h3>{teamData.name}</h3>
      <h4>Type: {teamData.type_id}</h4>
      <h4>Link Code: {teamData.link_code}</h4>
    </div>
  );
}

class GameDetailView extends React.Component {

  componentWillMount() {
    // load game data...
    if ((!this.props.gameData) || (this.props.gameData.id !== this.props.routeParams.gameId)) {
      this.props.loadGameData(this.props.routeParams.gameId);
    }
    // load team types
    this.props.loadTeamTypes();
  }

  handleTeamNameChange(event) {
    this.setState({
      teamNameValue: event.target.value,
    });
  }

  handleTeamFormSubmit(name, type) {

  }

  render() {
    if (this.props.loadingGameData) {
      return (<div>Loading...</div>);
    }
    if (this.props.gameDataError) {
      return (<div>{this.props.gameDataError}</div>);
    }
    if (!this.props.gameData) {
      return (<div>Game Not Found!</div>);
    }
    const createDate = new Date(this.props.gameData.createDate);
    return (
      <div>
        <h1>Game Detail View</h1>
        <h2>{this.props.gameData.name}</h2>
        <h3> {`${createDate.getMonth()}/${createDate.getDate()}/${createDate.getFullYear()}`}</h3>
        <h4>Number of Rounds: {this.props.gameData.numRounds}</h4>
        <h2>Teams</h2>
        <h3>Add a team</h3>
        <AddTeamForm
          addingTeam={this.props.addingTeam}
          teamTypes={this.props.teamTypes}
          onSubmit={this.props.addTeam}
          submitError={this.props.teamAddError}
        />
        {
          (this.props.gameData.teams.length > 0) ?
          this.props.gameData.teams.map(makeTeamPanel) :
          (<h5>No Teams</h5>)
        }
      </div>
    );
  }
}

GameDetailView.propTypes = {
  routeParams: React.PropTypes.shape({
    gameId: React.PropTypes.string,
  }).isRequired,
  loadingGameData: React.PropTypes.bool.isRequired,
  gameDataError: React.PropTypes.string,
  gameData: gameDataShape,
  loadGameData: React.PropTypes.func.isRequired,
  loadTeamTypes: React.PropTypes.func.isRequired,
  teamTypes: TeamTypeArray,
  addTeam: React.PropTypes.func.isRequired,
  addingTeam: React.PropTypes.bool,
  teamAddError: React.PropTypes.string,
};

GameDetailView.defaultProps = {
  gameDataError: null,
  gameData: null,
  addingTeam: false,
  teamAddError: null,
};

export default GameDetailView;
