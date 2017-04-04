import React from 'react';

function makeTeamPanel(teamData) {
  return (
    <div>
      <h3>{teamData.name}</h3>
      <h4>Type: {teamData.type_id}</h4>
      <h4>Link Code: {teamData.link_code}</h4>
    </div>
  );
}

function createTeamTypes() {
  return null;
}

class GameDetailView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentWillMount() {
    // load game data...
    if (this.props.gameData && (this.props.gameData.id !== this.props.routeParams.gameId)) {
      this.props.loadGameData(this.props.routeParams.gameId);
    }
  }

  handleFieldChange(event, field) {
    this.setState({
      [field]: event.target.value,
    });
  }

  handleTeamNameChange(event) {
    this.setState({
      teamNameValue: event.target.value,
    });
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
        <form onSubmit={this.handleTeamSubmit}>
          <label htmlFor="teamName">
            Team Name
            <input
              id="teamName"
              type="text"
              value={this.state.teamNameValue}
              onChange={event => this.handleFieldChange(event, 'teamNameValue')}
              disabled={this.props.submitting}
            />
          </label>
          <br />
          <label htmlFor="teamType">
            Team Type
            <select onChange={this.dropDownSelected}>
              {createTeamTypes()}
            </select>
          </label>
          <br />
          <input type="submit" value="Create Team" />
        </form>
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
  gameData: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    numRounds: React.PropTypes.number,
    createDate: React.PropTypes.string,
    teams: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string,
        mature: React.PropTypes.bool,
        resources: React.PropTypes.number,
        mindset: React.PropTypes.number,
        type_id: React.PropTypes.number,
        game_id: React.PropTypes.number,
        link_code: React.PropTypes.string,
      })
    ),
  }),
  loadGameData: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool,
  loadTeamTypes: React.PropTypes.func.isRequired,
  teamTypes: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      name: React.PropTypes.string,
      description: React.PropTypes.string,
      intial_mature: React.PropTypes.bool,
      initial_resource: React.PropTypes.number,
      initial_mindset: React.PropTypes.number,
      disabled: React.PropTypes.bool,
    })
  ),

};

GameDetailView.defaultProps = {
  gameDataError: '',
  submitting: false,
  gameData: null,
};

export default GameDetailView;
