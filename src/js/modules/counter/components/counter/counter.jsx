import React from 'react';
import CounterControls from './subcomponents/counterControls';
import CounterData from './subcomponents/counterData';

const Counter = props => (
  <div className="counter-container">
    <CounterControls
      {...props}
    />
    <CounterData
      {...props}
    />
  </div>
);


Counter.propTypes = {
  onPlusClick: React.PropTypes.func.isRequired,
  onSubClick: React.PropTypes.func.isRequired,
  onResetClick: React.PropTypes.func.isRequired,
  counterValue: React.PropTypes.number.isRequired,
  totalClicks: React.PropTypes.number.isRequired,
};

export default Counter;
