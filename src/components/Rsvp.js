import React from 'react';
import RsvpForm from './RsvpForm/RsvpForm';

const Rsvp = () => {
  return (
    <div>
      <h1 style={{color: "black"}}>
        Andrew &amp; Vanessa's Wedding
      </h1>
      <p>
        If you're responding for you and a guest (or your family), you'll be able to RSVP for your entire group.
      </p>
      <RsvpForm/>
    </div>
  );
};

export default Rsvp;
