import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from 'components/Home';
import Rsvp from 'components/Rsvp';
import Navbar from 'components/Navbar';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/rsvp">
          <Rsvp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Navbar />
    </Router>
  );
}

export default App;
