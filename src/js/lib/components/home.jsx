import React from 'react';
import Readme from 'modules/../../../README.md';

const HomepageStyle = {
  padding: '0 17px 20px 17px',
};

const Home = () => (
  <div
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: Readme }}
    style={HomepageStyle}
  />
);

export default Home;

