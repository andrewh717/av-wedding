import React from 'react';
import { db } from '../../firebase';

const RsvpStep = (props) => {
  if (props.step !== 1) {
    return null;
  }

  const handleAccept = (event, guestInfo, guestKey) => {
    event.preventDefault();
    guestInfo.isAttending = true;
    guestInfo.hasResponded = true;
  };

  const handleDecline = (event, guestInfo, guestKey) => {
    event.preventDefault();
    guestInfo.isAttending = false;
    guestInfo.hasResponded = true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const batch = db.batch();
    props.partyData.forEach((guest) => {
      const documentRef = db.collection('guests').doc(guest.id);
      batch.update(documentRef, guest.data);
    });
    batch.commit().catch((err) => console.error(err));
    props.setCurrStep(props.step + 1);
  };

  const RsvpRow = () => {
    return (
      <div>
        {props.partyData.map((guest) => {
          const guestKey =
            guest.data.firstName.toLowerCase() + '-' + guest.data.lastName.toLowerCase();
          return (
            <div className="rsvp-row" key={guestKey}>
              <p>
                {guest.data.firstName} {guest.data.lastName}
              </p>
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label
                  className={
                    'btn btn-outline-primary' +
                    (guest.data.hasResponded ? ' disabled' : '') +
                    (guest.data.isAttending ? ' selected' : '')
                  }
                >
                  <input
                    type="radio"
                    name="options"
                    id={guestKey + '-accept'}
                    onClick={(event) => handleAccept(event, guest.data, guestKey)}
                  />
                  Accept
                </label>
                <label
                  className={
                    'btn btn-outline-primary' +
                    (guest.data.hasResponded ? ' disabled' : '') +
                    (!guest.data.isAttending ? ' selected' : '')
                  }
                >
                  <input
                    type="radio"
                    name="options"
                    id={guestKey + '-decline'}
                    onClick={(event) => handleDecline(event, guest.data, guestKey)}
                  />
                  Decline
                </label>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Check if all guests in the party have responded to determine whether or not to display RSVP button
  const allResponded = props.partyData.every((guest) => guest.data.hasResponded);
  let topText, bottomText;
  if (allResponded) {
    topText = <p>Your RSVP has already been received.</p>;
    bottomText = (
      <p>If you need to make a change, please contact Andrew or Vanessa directly. Thanks!</p>
    );
  } else {
    topText = (
      <p>
        Please make a selection for each member of your party. If you would like to RSVP only for
        yourself at this time, please submit with only your response selected. You may come back to
        this page in the future to RSVP for the rest of your party.
      </p>
    );
    bottomText = (
      <button className="btn btn-dark" onClick={handleSubmit}>
        Send RSVP
      </button>
    );
  }

  return (
    <div className="px-3">
      {topText}
      <RsvpRow></RsvpRow>
      {bottomText}
    </div>
  );
};

export default RsvpStep;
