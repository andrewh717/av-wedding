import React from 'react';
import { db } from '../../firebase';

export default function RsvpStep(props) {
  if (props.step !== 1) {
    return null;
  }

  function handleAccept(event, guestInfo, guestKey) {
    event.preventDefault();
    guestInfo.isAttending = true;
    guestInfo.hasResponded = true;
  };

  function handleDecline(event, guestInfo, guestKey) {
    event.preventDefault();
    guestInfo.isAttending = false;
    guestInfo.hasResponded = true;
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
          const guestKey = guest.data.firstName.toLowerCase() + '-' + guest.data.lastName.toLowerCase();
          return (
          <div className="rsvp-row" key={guestKey}>
            <p>{guest.data.firstName} {guest.data.lastName}</p>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-outline-primary">
                <input type="radio" name="options" id={guestKey + '-accept'} onClick={(event) => handleAccept(event, guest.data, guestKey)}/>
                Accept
              </label>
              <label className="btn btn-outline-primary">
                <input type="radio" name="options" id={guestKey + '-decline'} onClick={(event) => handleDecline(event, guest.data, guestKey)}/>
                Decline
              </label>
            </div>
          </div>
          )
        })}
      </div>
    );
  }

  return (
    <div className="px-3">
      <p>Please make a selection for each member of your party</p>
      <RsvpRow></RsvpRow>
      <button className="btn btn-primary" onClick={handleSubmit}>Send RSVP</button>
    </div>
  );
};
