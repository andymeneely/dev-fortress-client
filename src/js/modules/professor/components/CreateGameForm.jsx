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
    this.readyToSubmit = this.readyToSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
      this.state.gameNameValue,
      this.state.numRoundsValue
    );
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

  readyToSubmit() {
    return (this.state.gameNameValue.length > 0) && (this.state.numRoundsValue > 0);
  }


  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label
          htmlFor="game-name"
        >
          Game Name
        </label>
        <br />
        <input
          id="game-name"
          type="text"
          value={this.state.gameNameValue}
          onChange={this.handleGameNameChange}
          disabled={this.props.disabled}
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
          disabled={this.props.disabled}
        />
        <br />
        <input
          type="submit"
          value="Create Game"
          disabled={this.props.disabled || !this.readyToSubmit()}
        />
      </form>
    );
  }


}

CreateGameForm.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.bool.isRequired,
};

export default CreateGameForm;

