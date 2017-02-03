import React, { PropTypes } from 'react';

// define component class by extending React.Component
const CounterData = props => (
  <div className="counter-display">
    <div className="counter-display-title">Counter Value</div>
    <div className="counter-display-value">
      {props.counterValue}
    </div>
    <div className="counter-display-title">Total Clicks</div>
    <div className="counter-display-value">
      {props.totalClicks}
    </div>
  </div>
);

CounterData.propTypes = {
  counterValue: PropTypes.number.isRequired,
  totalClicks: PropTypes.number.isRequired,
};

CounterData.defaultProps = {
  counterValue: 0,
  totalClicks: 0,
};


export default CounterData;

