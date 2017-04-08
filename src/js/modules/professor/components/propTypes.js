import { PropTypes } from 'react';
// File for shared and/or complex react proptype definitions

export const TeamTypeArray = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    intial_mature: PropTypes.bool,
    initial_resource: PropTypes.number,
    initial_mindset: PropTypes.number,
    disabled: PropTypes.bool,
  })
);

export const gameDataShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  numRounds: PropTypes.number,
  createDate: PropTypes.string,
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      mature: PropTypes.bool,
      resources: PropTypes.number,
      mindset: PropTypes.number,
      type_id: PropTypes.number,
      game_id: PropTypes.number,
      link_code: PropTypes.string,
    })
  ),
});
