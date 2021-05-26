import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from 'components/Banner';
import Story from 'components/Story';
import WhenWhere from 'components/WhenWhere';
import WeddingParty from 'components/WeddingParty';
import Photos from 'components/Photos';
import Registry from 'components/Registry';
import Faq from 'components/Faq';
import Rsvp from 'components/Rsvp';
import Navbar from 'components/Navbar';

function App() {
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

function Home() {
  return (
    <div>
      <Banner />
      <Story />
      <WhenWhere />
      <WeddingParty />
      <Photos />
      <Registry />
      <Faq />
    </div>
  );
}

export default App;
