

import React, { PropTypes } from 'react';

// define component class by extending React.Component
class CounterControls extends React.Component {
    /**
     * CounterControls Constructor
     * @param  {Object} props - Component Properties
     */
  constructor(props) {
    super(props);

    this.state = {
      // initial component state
    };

  }


    /**
     * Render the CounterControls
     * @return {React.Element} - the rendered elment
     */
  render() {
    return (
      <div>
        <button
          className="counter-btn counter-plus-btn"
          onClick={this.props.onPlusClick}
        >
                +
                </button>
        <button
          className="counter-btn counter-sub-btn"
          onClick={this.props.onSubClick}
        >
                -
                </button>
        <button
          className="counter-btn counter-reset-btn"
          onClick={this.props.onResetClick}
        >
                Reset
                </button>
      </div>
    );
  }
}

CounterControls.propTypes = {
  onPlusClick: PropTypes.func.isRequired,
  onSubClick: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired,
};

CounterControls.defaultProps = {
  onPlusClick: () => {},
  onSubClick: () => {},
  onResetClick: () => {},
};

export default CounterControls;

