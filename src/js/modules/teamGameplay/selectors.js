
import { createSelector } from 'reselect';
import { name } from './constants';

export const teamName = state => state[name].teamName;
export const teamGameId = state => state[name].teamGameId;
export const teamTypeId = state => state[name].teamTypeId;
export const teamTypeIndex = state => state[name].teamTypeIndex;
export const teamDataLoaded = createSelector(teamName, tn => !!tn);
export const teamTypeName = createSelector(
  teamTypeIndex,
  teamTypeId,
  (index, typeId) => {
    if (index && index[typeId]) {
      return index[typeId].name;
    }
    return null;
  }
);
export const teamDevCaps = state => state[name].teamResources;
export const teamMindset = state => state[name].teamMindset;
export const gameName = state => state[name].gameName;
export const currentRound = state => state[name].currentRound;

export const actionsIndex = state => state[name].actionsIndex;
export const actionsLoaded = createSelector(
  actionsIndex,
  acs => !!acs
);

export const selectedActions = state => state[name].selectedActions;
export const pastActions = state => state[name].pastActions;
export const spentDevcaps = createSelector(
  actionsIndex,
  selectedActions,
  (acts, sel) => Object.keys(sel)
          .filter(i => sel[i])
          .reduce((acc, val) => acc + acts[val].devcaps_cost, 0)
);
