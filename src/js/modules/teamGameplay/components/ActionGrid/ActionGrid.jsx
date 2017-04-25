import React from 'react';

class ActionGrid extends React.Component {

  constructor(props) {
    super(props);

    this.makeActionPanel = this.makeActionPanel.bind(this);
  }

  makeActionPanel(actionId) {
    const actionData = this.props.actionsIndex[actionId];

    return (
      <div key={`action_${actionId}`}>
        {actionData.name}
      </div>
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
