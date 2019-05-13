import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const RootComponent = ({ routes }) => <Router>{routes}</Router>;

export default RootComponent;
