import React from 'react';

const ActionPanel = (props) => {
  const nameStyle = {
    fontSize: '1.5em',
  };

  if (props.name.length > 35) {
    nameStyle.fontSize = '0.7em';
  } else if (props.name.length > 25) {
    nameStyle.fontSize = '1.0em';
  } else if (props.name.length > 15) {
    nameStyle.fontSize = '1.2em';
  }

  return (
    <div className={`action-panel ${props.selected ? 'selected' : ''}`}>
      <div className="selected-border" />
      <div className="check-badge">
        <span>✓</span>
      </div>
      <div className="name-container">
        <h3 style={nameStyle}>
          {props.name}
        </h3>
      </div>
      <div className="stat-container">
        <div className="value-label-container">
          <div className="value">
            <span>
              -{props.cost}
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
              {props.reward}
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
        <p>{props.description}</p>
      </div>
      <div className="button-container">
        <button onClick={props.onClick}>
          {props.selected ? 'Deselect' : 'Invest'}
        </button>
      </div>
    </div>
  );
};

ActionPanel.propTypes = {
  name: React.PropTypes.string.isRequired,
  cost: React.PropTypes.number.isRequired,
  reward: React.PropTypes.number.isRequired,
  description: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

ActionPanel.defaultProps = {
  selected: false,
  onClick: () => {},
};

export default ActionPanel;
