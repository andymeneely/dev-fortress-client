import React from 'react';
import AddTeamForm from './subcomponents/AddTeamForm';
import { TeamTypeArray, gameDataShape } from '../propTypes';


class GameDetailView extends React.Component {

  constructor(props) {
    super(props);

    this.makeTeamPanel = this.makeTeamPanel.bind(this);
  }

  componentWillMount() {
    // load game data...
    if ((!this.props.gameData) || (this.props.gameData.id !== this.props.routeParams.gameId)) {
      this.props.loadGameData(this.props.routeParams.gameId);
    }
    // load team types
    this.props.loadTeamTypes();
  }

  componentWillUpdate(nextProps) {
    if (this.props.addingTeam && !(nextProps.addingTeam)) {
      this.props.loadGameData(this.props.gameData.id);
    }
  }

  handleTeamNameChange(event) {
    this.setState({
      teamNameValue: event.target.value,
    });
  }

  makeTeamPanel(teamData) {
    const linkCode = `Link Code: ${window.location.protocol}//${window.location.host}/play/${teamData.link_code}`;
    return (
      <div key={`team_${teamData.id}`}>
        <h3>{teamData.name}</h3>
        <h4>Type: {
          this.props.teamTypesIndex[teamData.teamtype_id] ?
          this.props.teamTypesIndex[teamData.teamtype_id].name :
          'Loading...'
        }</h4>
        <h4>{linkCode}</h4>
      </div>
    );
  }

  render() {
    if (this.props.loadingGameData && !(this.props.gameData)) {
      return (<div>Loading...</div>);
    }
    if (this.props.gameDataError) {
      return (<div>{this.props.gameDataError}</div>);
    }
    if (!this.props.gameData) {
      return (<div>Game Not Found!</div>);
    }
    const createDate = new Date(this.props.gameData.createDate);
    const start = this.props.startGame.bind(this, this.props.gameData);
    return (
      <div>
        <h1>Game Detail View</h1>
        <h2>{this.props.gameData.name}</h2>
        <h3>Created: {`${createDate.getMonth()}/${createDate.getDate()}/${createDate.getFullYear()}`}</h3>
        <h4>Number of Rounds: {this.props.gameData.numRounds}</h4>
        <button
          disabled={this.props.gameData.teams.length === 0}
          onClick={start}
        > Start Game </button>
        <h2>Teams</h2>
        <h3>Add a team</h3>
        <AddTeamForm
          addingTeam={this.props.addingTeam}
          teamTypes={this.props.teamTypes}
          onSubmit={(tName, tId) => this.props.addTeam(tName, tId, this.props.gameData.id)}
          submitError={this.props.teamAddError}
        />
        {
          (this.props.gameData.teams.length > 0) ?
          this.props.gameData.teams.map(this.makeTeamPanel) :
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
  teamTypes: TeamTypeArray.isRequired,
  teamTypesIndex: React.PropTypes.shape({}).isRequired,
  addTeam: React.PropTypes.func.isRequired,
  addingTeam: React.PropTypes.bool,
  teamAddError: React.PropTypes.string,
  startGame: React.PropTypes.func.isRequired,
};

GameDetailView.defaultProps = {
  gameDataError: null,
  gameData: null,
  addingTeam: false,
  teamAddError: null,
};

export default GameDetailView;
