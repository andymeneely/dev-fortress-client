import React from 'react';

const TeamSidebar = (props) => {
  const routineDev = (props.startingDevCaps - props.spentDevCaps);
  const newDevCaps = Math.floor(routineDev / 2);
  const startingDevCaps = routineDev + newDevCaps;
  return (
    <div className="team-sidebar">
      <div className="calculation-container">
        <h2>Investments</h2>
        <div className="value-container">
          <div className="value-label">
            <span>Starting DevCaps</span>
          </div>
          <div className="value-value">
            <span>{props.startingDevCaps}</span>
          </div>
        </div>
        <div className="value-container">
          <div className="value-label">
            <span>Spent DevCaps</span>
          </div>
          <div className="value-value loss">
            <span>-{props.spentDevCaps}</span>
          </div>
        </div>
        <div className="result-line" />
        <div className="value-container">
          <div className="value-label">
            <span>Routine Development</span>
          </div>
          <div className="value-value">
            <span>{routineDev}</span>
          </div>
        </div>
        <div className="note">
          <span>Changes will be applied when phase ends.</span>
        </div>
      </div>
      <div className="calculation-container">
        <h2>Next Month</h2>
        <div className="value-container">
          <div className="value-label">
            <span>New DevCaps</span>
          </div>
          <div className="value-value gain">
            <span>+{newDevCaps}</span>
          </div>
        </div>
        <div className="value-container">
          <div className="value-label">
            <span>Leftover DevCaps</span>
          </div>
          <div className="value-value">
            <span>{props.startingDevCaps - props.spentDevCaps}</span>
          </div>
        </div>
        <div className="value-container">
          <div className="value-label">
            <span>Team Damage</span>
          </div>
          <div className="value-value loss">
            <span>-?</span>
          </div>
        </div>
        <div className="result-line" />
        <div className="value-container">
          <div className="value-label">
            <span>Starting DevCaps</span>
          </div>
          <div className="value-value">
            <span>{startingDevCaps}*</span>
          </div>
        </div>
        <div className="note">
          <span>*Assuming no damage next phase.</span>
        </div>
      </div>
    </div>
  );
};

TeamSidebar.propTypes = {
  startingDevCaps: React.PropTypes.number,
  spentDevCaps: React.PropTypes.number,
};

TeamSidebar.defaultProps = {
  startingDevCaps: 10,
  spentDevCaps: 8,
};

export default TeamSidebar;
