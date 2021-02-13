import React from 'react';

const SubmitStep = (props) => {
  if (props.step !== 2) {
    return null;
  }

  return (
    <div>
      <p>Submitted!</p>
    </div>
  );
};

export default SubmitStep;
