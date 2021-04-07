import React, { useState } from 'react';
import SearchStep from './SearchStep';
import RsvpStep from './RsvpStep';
import SubmitStep from './SubmitStep';

// const steps = ['search', 'rsvp', 'complete'];

const RsvpForm = () => {
  const [currStep, setCurrStep] = useState(0);
  const [partyData, setPartyData] = useState([]);

  // function _next(step) {
  //   step = step >= 1 ? 2 : step + 1;
  //   setCurrStep(step);
  //   // console.log('currStep: ', step);
  // }

  // function _prev(step) {
  //   step = step <= 0 ? 0 : step - 1;
  //   setCurrStep(step);
  //   // console.log('currStep: ', step);
  // }

  // function NextButton(props) {
  //   let step = props.step;
  //   // console.log('currStep: ', step);
  //   if (step < 2) {
  //     return <button className="btn btn-primary left-btn" onClick={() => _next(step)}>Next</button>;
  //   }
  //   return null;
  // }

  // function PrevButton(props) {
  //   let step = props.step;
  //   if (step > 0) {
  //     return <button className="btn btn-primary" onClick={() => _prev(step)}>Previous</button>;
  //   }
  //   return null;
  // }

  return (
    <React.Fragment>
      <form className="rsvp-form" autoComplete="off">
        <SearchStep step={currStep} setCurrStep={setCurrStep} setPartyData={setPartyData}/>
        <RsvpStep step={currStep} setCurrStep={setCurrStep} partyData={partyData}/>
        <SubmitStep step={currStep} />
      </form>
      {/* <NextButton step={currStep}></NextButton>
      <PrevButton step={currStep}></PrevButton> */}
    </React.Fragment>
  );
};

export default RsvpForm;