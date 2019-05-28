import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const RootComponent = ({ routes }) => {
  return (
    <Router>
      {routes}
    </Router>
  );
};

export default RootComponent;
