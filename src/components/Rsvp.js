import React from 'react';
import RsvpForm from './RsvpForm/RsvpForm';

const Rsvp = () => {
  return (
    <div className="mt-3">
      <h1 style={{color: "black"}}>
        Andrew &amp; Vanessa's Wedding
      </h1>
      <RsvpForm/>
    </div>
  );
};

export default Rsvp;