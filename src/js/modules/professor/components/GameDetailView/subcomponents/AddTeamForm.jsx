import React from 'react';
import { TeamTypeArray } from '../../propTypes';

function makeTeamTypes(typeData) {
  return (
    <option key={`team_type${typeData.id}`} value={typeData.id}>{typeData.name}</option>
  );
}

class AddTeamForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamNameValue: '',
      teamIdValue: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.canSubmit = this.canSubmit.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (this.props.addingTeam && !(nextProps.addingTeam)) {
      this.setState({
        teamNameValue: '',
        teamIdValue: '',
      });
    }
  }

  handleFieldChange(event, field) {
    this.setState({
      [field]: event.target.value,
    });
  }

  handleSubmit(event) {
    if (this.canSubmit()) {
      event.preventDefault();
      this.props.onSubmit(
        this.state.teamNameValue,
        this.state.teamIdValue
      );
    }
  }

  canSubmit() {
    return (
      (this.state.teamNameValue.length > 0) &&
      (this.state.teamIdValue !== '')
    );
  }

  render() {
    return (
      <div>
        {
          (this.props.submitError) ?
            (<span>{this.props.submitError}</span>) :
          null
        }
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="teamName">
            Team Name
            <input
              id="teamName"
              type="text"
              value={this.state.teamNameValue}
              onChange={event => this.handleFieldChange(event, 'teamNameValue')}
              disabled={this.props.addingTeam}
            />
          </label>
          <br />
          <label htmlFor="teamType">
            Team Type
            {this.createTeamTypeSelect}
            <select
              onChange={event => this.handleFieldChange(event, 'teamIdValue')}
              value={this.state.teamIdValue}
              disabled={this.props.addingTeam}
            >
              <option value="">Select Team Type</option>
              {
                this.props.teamTypes
                .filter(
                  tt => !tt.disabled
                ).map(makeTeamTypes)
              }
            </select>
          </label>
          <br />
          <input
            disabled={!this.canSubmit() || this.props.addingTeam}
            type="submit"
            value="Create Team"
          />
        </form>
      </div>
    );
  }
}

AddTeamForm.propTypes = {
  submitError: React.PropTypes.string,
  teamTypes: TeamTypeArray.isRequired,
  addingTeam: React.PropTypes.bool,
  onSubmit: React.PropTypes.func,
};

AddTeamForm.defaultProps = {
  submitError: null,
  addingTeam: false,
  onSubmit: () => {},
};

export default AddTeamForm;
