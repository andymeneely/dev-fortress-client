
import reducer from './reducer';
import * as constants from './constants';
import TeamJoiner from './components/TeamJoiner';
import TeamDashboard from './components/TeamDashboard';
import { bindHandlers } from './handlers';

bindHandlers();


export default {
  constants,
  reducer,
  components: {
    TeamJoiner,
    TeamDashboard,
  },
};
