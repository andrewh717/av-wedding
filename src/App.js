import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import Rsvp from 'components/Rsvp';
import Navbar from 'components/Navbar';
import useMobile from 'hooks/useMobile';
import smoothscroll from 'smoothscroll-polyfill';

const App = () => {
  const isMobile = useMobile();
  if (isMobile) {
    smoothscroll.polyfill();
  }
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Navbar />
    </Router>
  );
};

export default App;
