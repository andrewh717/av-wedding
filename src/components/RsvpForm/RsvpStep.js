import React from 'react';

export default function RsvpStep(props) {
  if (props.step !== 1) {
    return null;
  }

  return (
    <div>
      <button className="btn btn-primary">Click me</button>
    </div>
  );
};