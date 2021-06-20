import React, { useState } from 'react';
import SearchStep from './SearchStep';
import RsvpStep from './RsvpStep';
import SubmitStep from './SubmitStep';

const RsvpForm = () => {
  const [currStep, setCurrStep] = useState(0);
  const [partyData, setPartyData] = useState([]);

  return (
    <React.Fragment>
      <form className="rsvp-form" autoComplete="off">
        <SearchStep step={currStep} setCurrStep={setCurrStep} setPartyData={setPartyData}/>
        <RsvpStep step={currStep} setCurrStep={setCurrStep} partyData={partyData}/>
        <SubmitStep step={currStep} />
      </form>
    </React.Fragment>
  );
};

export default RsvpForm;