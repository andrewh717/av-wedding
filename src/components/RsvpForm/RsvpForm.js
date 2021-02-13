import React, { useState } from 'react';
import SearchStep from './SearchStep';
import RsvpStep from './RsvpStep';
import SubmitStep from './SubmitStep';

// const steps = ['search', 'rsvp', 'complete'];

const RsvpForm = () => {
  const [currStep, setCurrStep] = useState(0);

  return (
    <React.Fragment>
      <form>
        <SearchStep step={currStep}/>
        <RsvpStep step={currStep}/>
        <SubmitStep step={currStep}/>
      </form>
      <button onClick={() => setCurrStep(currStep + 1)}>
        Next
      </button>
    </React.Fragment>
  );
}

export default RsvpForm;