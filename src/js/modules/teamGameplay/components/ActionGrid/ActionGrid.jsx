import React from 'react';
import ActionPanel from '../ActionPanel';

class ActionGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: {

      },
    };
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
        selected={!!this.state.selected[actionId]}
        onClick={() => this.setState(
          {
            selected: Object.assign({}, this.state.selected, {
              [actionId]: !(this.state.selected[actionId]),
            }),
          })
        }
      />
    );
  }

  render() {
    if (!this.props.actionsLoaded) {
      return (
        <div className="action-grid-container">
          <h1>Loading Actions...</h1>
        </div>
      );
    }

    return (
      <div className="action-grid-container">
        {Object.keys(this.props.actionsIndex).map(this.makeActionPanel)}
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
};

ActionGrid.defaultProps = {
  actionsIndex: null,
  actionsLoaded: false,
};

export default ActionGrid;
