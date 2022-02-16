import React from 'react';
import { db } from '../../firebase';

const RsvpStep = (props) => {
  if (props.step !== 1) {
    return null;
  }

  const handleAccept = (event, guestInfo, guestKey) => {
    guestInfo.isAttending = true;
    guestInfo.hasResponded = true;
  };

  const handleDecline = (event, guestInfo, guestKey) => {
    guestInfo.isAttending = false;
    guestInfo.hasResponded = true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const batch = db.batch();
    props.partyData.forEach((guest) => {
      if (guest.data.hasResponded) {
        const documentRef = db.collection('guests').doc(guest.id);
        batch.update(documentRef, guest.data);
        // Post RSVP to Google Sheets after Firestore is updated
        postToGoogleSheets(guest.data);
      }
    });
    batch.commit().catch((err) => console.error(err));
    props.setCurrStep(props.step + 1);
  };

  const scriptURL =
    'https://script.google.com/macros/s/AKfycbzYM3D-VZDfpc7Y2W0mb-aGJzXcA5MErQ63NCE3ROjhTKi8_-6i/exec';

  const getFormData = (object) =>
    Object.keys(object).reduce((formData, key) => {
      formData.append(key, object[key]);
      return formData;
    }, new FormData());

  const postToGoogleSheets = (guestInfo) => {
    const { hasResponded, ...guestData } = guestInfo;
    fetch(scriptURL, { method: 'POST', body: getFormData(guestData), mode: 'no-cors' })
      .then((response) => console.log('Success!', response))
      .catch((error) => console.error('Error!', error.message));
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
              <div className="btn-group" role="group">
                <input
                  type="radio"
                  name={guestKey + '-options'}
                  id={guestKey + '-accept'}
                  className="btn-check"
                  onClick={(event) => handleAccept(event, guest.data, guestKey)}
                  autoComplete="off"
                />
                <label
                  className={
                    'btn btn-outline-primary' +
                    (guest.data.hasResponded ? ' disabled' : '') +
                    (guest.data.isAttending ? ' selected' : '')
                  }
                  htmlFor={guestKey + '-accept'}
                >
                  Accept
                </label>
                <input
                  type="radio"
                  name={guestKey + '-options'}
                  id={guestKey + '-decline'}
                  className="btn-check"
                  onClick={(event) => handleDecline(event, guest.data, guestKey)}
                  autoComplete="off"
                />
                <label
                  className={
                    'btn btn-outline-primary' +
                    (guest.data.hasResponded ? ' disabled' : '') +
                    (!guest.data.isAttending && guest.data.hasResponded ? ' selected' : '')
                  }
                  htmlFor={guestKey + '-decline'}
                >
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
