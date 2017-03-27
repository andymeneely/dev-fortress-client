import React from 'react';

class CreateGameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameNameValue: '',
      numRoundsValue: 1,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleGameNameChange = this.handleGameNameChange.bind(this);
    this.handleNumRoundsChange = this.handleNumRoundsChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({
      gameName: this.state.gameNameValue,
      numRounds: this.state.numRoundsValue,
    });
  }

  handleGameNameChange(event) {
    this.setState({
      gameNameValue: event.target.value,
    });
  }

  handleNumRoundsChange(event) {
    this.setState({
      numRoundsValue: parseInt(event.target.value, 10),
    });
  }


  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="game-name">Game Name</label>
        <br />
        <input
          id="game-name"
          type="text"
          value={this.state.gameNameValue}
          onChange={this.handleGameNameChange}
        />
        <br />
        <label htmlFor="num-rounds">Number of Rounds</label>
        <br />
        <input
          id="num-rounds"
          type="number"
          value={this.state.numRoundsValue}
          onChange={this.handleNumRoundsChange}
          min="1"
        />
        <br />
        <input type="submit" value="Create Game" />
      </form>
    );
  }


}

CreateGameForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
};

export default CreateGameForm;

