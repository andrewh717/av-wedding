import React from 'react';
import { db } from '../../firebase';

export default function RsvpStep(props) {
  if (props.step !== 1) {
    return null;
  }

  function handleAccept(event, guestInfo) {
    event.preventDefault();
    guestInfo.isAttending = true;
    guestInfo.hasResponded = true;
    console.log(props.partyData);
  };

  function handleDecline(event, guestInfo) {
    event.preventDefault();
    guestInfo.isAttending = false;
    guestInfo.hasResponded = true;
    console.log(props.partyData);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const batch = db.batch();
    props.partyData.forEach(guest => {
      const documentRef = db.collection('guests').doc(guest.id);
      batch.update(documentRef, guest.data);
    });
    batch.commit().catch(err => console.error(err));
    props.setCurrStep(props.step + 1);
  }

  function RsvpRow() {
    return (
      <div>
        {props.partyData.map(guest => {
          const guestKey = guest.data.firstName + '_' + guest.data.lastName;
          return (
          <div className="rsvp-row" key={guestKey}>
            <p>{guest.data.firstName} {guest.data.lastName}</p>
            <div>
              <button className="btn btn-primary left-btn" onClick={(event) => handleAccept(event, guest.data)}>Accept</button>
              <button className="btn btn-primary" onClick={(event) => handleDecline(event, guest.data)}>Decline</button>
            </div>
          </div>
          )
        })}
      </div>
    );
  }

  return (
    <div>
      <RsvpRow></RsvpRow>
      <button className="btn btn-primary" onClick={handleSubmit}>Send RSVP</button>
    </div>
  );
};
