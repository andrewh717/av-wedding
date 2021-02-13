import React from 'react';

const RsvpStep = (props) => {
  if (props.step !== 1) {
    return null;
  }

  return (
    <div>
      <button className="btn btn-primary">Click me</button>
    </div>
  );
};

export default RsvpStep;
