import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';

import './App.css';
import logo from './spacex-logo.png';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:5000/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Link to="/">
            <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />
          </Link>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flightNumber" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
