import React from 'react';

function makePrereqItem(prereq) {
  return (
    <li key={`prereq_${prereq.id}`} >
      {prereq.name}
    </li>
  );
}

class ActionPanel extends React.Component {

  render() {
    const nameStyle = {
      fontSize: '1.5em',
    };

    if (this.props.name.length > 35) {
      nameStyle.fontSize = '0.7em';
    } else if (this.props.name.length > 25) {
      nameStyle.fontSize = '1.0em';
    } else if (this.props.name.length > 15) {
      nameStyle.fontSize = '1.2em';
    }

    return (
      <div
        className={`action-panel ${this.props.selected ? 'selected' : ''}`}
      >
        <div className="selected-border" />
        <div className="check-badge">
          <span>✓</span>
        </div>
        <div className="name-container">
          <div>
            <h3 style={nameStyle}>
              {this.props.name}
            </h3>
          </div>
        </div>
        <div className="action-body">

          { (this.props.prereqs.length > 0) ? (
            <div
              className="prereq-container"
            >
              <h2>PreReqs</h2>
              <ul>
                {this.props.prereqs.map(makePrereqItem)}
              </ul>
            </div>
          ) : null}
          <div className="stat-container">
            <div className="value-label-container">
              <div className="value">
                <span>
                  {this.props.cost}
                </span>
              </div>
              <div className="label">
                <span>
                  DevCaps
                </span>
              </div>
            </div>
            <div className="value-label-container">
              <div className="value">
                <span>
                  +{this.props.reward}
                </span>
              </div>
              <div className="label">
                <span>
                  Hacker Mindset
                </span>
              </div>
            </div>
          </div>
          <div className="description-container">
            <p>{this.props.description}</p>
          </div>
        </div>
        <div
          className="button-container"
        >
          <button
            onClick={this.props.onClick}
            disabled={(!this.props.prereqsMet || !this.props.canAfford) && !this.props.selected}
          >
            {
              (() => {
                if (this.props.selected) {
                  return 'Deselect';
                }
                if (!this.props.prereqsMet) {
                  return 'Missing PreReqs';
                }
                if (!this.props.canAfford) {
                  return 'Cannot Afford';
                }
                return 'Invest';
              })()
            }
          </button>
        </div>
      </div>
    );
  }
}

ActionPanel.propTypes = {
  name: React.PropTypes.string.isRequired,
  cost: React.PropTypes.number.isRequired,
  reward: React.PropTypes.number.isRequired,
  description: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  prereqsMet: React.PropTypes.bool.isRequired,
  canAfford: React.PropTypes.bool.isRequired,
  prereqs: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

ActionPanel.defaultProps = {
  selected: false,
  onClick: () => {},
};

export default ActionPanel;
