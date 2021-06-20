import React from 'react';

const SubmitStep = (props) => {
  if (props.step !== 2) {
    return null;
  }

  return (
    <div>
      <p>Your RSVP has been sent.</p>
      <p>Looking forward to seeing you at our wedding! <br/>- Andrew &amp; Vanessa</p>
    </div>
  );
};

export default SubmitStep;
