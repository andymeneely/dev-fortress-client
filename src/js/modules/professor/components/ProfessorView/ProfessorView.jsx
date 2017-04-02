// this is where we'll put the button
import React from 'react';
import { Link } from 'react-router';

const ProfessorViewStyle = {
  width: '100%',
  height: '100%',
};

function createGameListEntry(gameData) {
  const createDate = new Date(gameData.created_at);
  return (
    <div key={`mygame-${gameData.id}`}>
      <h4>{gameData.name}</h4>
      <span>Created: {`${createDate.getMonth()}/${createDate.getDate()}/${createDate.getFullYear()}` }</span>
      <br />
      <Link to={`/professor/game/${gameData.id}`}>More Info</Link>
    </div>
  );
}

class ProfessorView extends React.Component {

  componentWillMount() {
    this.props.loadGames();
  }


  render() {
    return (
      <div style={ProfessorViewStyle}>
        <h2>Professor Dashboard</h2>
        <Link to="/professor/createGame">
          Create Game
        </Link>
        <h3>My Games</h3>
        {
          this.props.loadingGames ? (<span>Loading...</span>) :
          (this.props.myGames.map(createGameListEntry))
        }
      </div>
    );
  }

}

ProfessorView.propTypes = {
  loadGames: React.PropTypes.func.isRequired,
  myGames: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string,
      maxRound: React.PropTypes.number,
    })
  ).isRequired,
  loadingGames: React.PropTypes.bool,
};

ProfessorView.defaultProps = {
  loadingGames: false,
};


export default ProfessorView;
