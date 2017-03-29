import React from 'react';

class GameDetailView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        Game Detail View - {this.props.routeParams.gameId}
      </div>
    );
  }
}

GameDetailView.propTypes = {
  routeParams: React.PropTypes.shape({
    gameId: React.PropTypes.string,
  }).isRequired,
};

export default GameDetailView;
