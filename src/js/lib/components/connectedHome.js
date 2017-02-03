import { connect } from 'react-redux';
import Home from './home';

const ConnectedHome = connect(
    () => ({
        // ...
    }),
    () => ({

    }),
)(Home);

export default ConnectedHome;
