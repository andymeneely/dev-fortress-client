import React from 'react';
import ActionPanel from '../ActionPanel';

class ActionGrid extends React.Component {

  constructor(props) {
    super(props);
    this.makeActionPanel = this.makeActionPanel.bind(this);
  }

  makeActionPanel(actionId) {
    const actionData = this.props.actionsIndex[actionId];
    return (
      <ActionPanel
        key={`action_${actionId}`}
        name={actionData.name}
        description={actionData.description}
        cost={actionData.devcaps_cost}
        reward={actionData.mindset_reward}
        selected={!!this.props.selectedActions[actionId]}
        onClick={() => this.props.toggleAction(actionId)}
        // for each prereq, check if we've done it in the past
        prereqsMet={actionData.prereqs.every(e => !!this.props.pastActions[e])}
        canAfford={this.props.remainingDevcaps >= actionData.devcaps_cost}
        prereqs={actionData.prereqs.map(e => this.props.actionsIndex[e.prereq_action_id])}
      />
    );
  }

  render() {
    if (!this.props.actionsLoaded) {
      return (
        <div className="action-grid">
          <h1>Loading Actions...</h1>
        </div>
      );
    }

    return (
      <div className="action-grid-container">
        <div className="action-grid">
          {Object.keys(this.props.actionsIndex).map(this.makeActionPanel)}
        </div>
      </div>
    );
  }
}

ActionGrid.propTypes = {
  actionsIndex: React.PropTypes.objectOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      name: React.PropTypes.string,
      description: React.PropTypes.string,
      devcaps_cost: React.PropTypes.number,
      mindset_reward: React.PropTypes.number,
    })
  ),
  actionsLoaded: React.PropTypes.bool,
  toggleAction: React.PropTypes.func,
  selectedActions: React.PropTypes.objectOf(React.PropTypes.bool).isRequired,
  pastActions: React.PropTypes.objectOf(React.PropTypes.bool).isRequired,
  remainingDevcaps: React.PropTypes.number.isRequired
};

ActionGrid.defaultProps = {
  actionsIndex: null,
  actionsLoaded: false,
  toggleAction: () => {},
};

export default ActionGrid;
