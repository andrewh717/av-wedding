import React from 'react';

export default function RsvpStep(props) {
  if (props.step !== 1) {
    return null;
  }

  const handleAccept = (event) => {
    event.preventDefault();
    _accept();
  };

  function _accept(guestInfo) {
    event.preventDefault();
    guestInfo.isAttending = true;
    console.log(props.partyData);
  }

  function _decline(guestInfo) {
    guestInfo.isAttending = false;
    console.log(props.partyData);
  }

  function RsvpRow() {
    let partyData = props.partyData;
    return (
      <div>
        {partyData.map(guestInfo => {
          const guestKey = guestInfo.firstName + '_' + guestInfo.lastName;
          return (
          <div className="rsvp-row" key={guestKey}>
            <p>{guestInfo.firstName} {guestInfo.lastName}</p>
            <div>
              <button className="btn btn-primary left-btn" onClick={() => _accept(guestInfo)}>Accept</button>
              <button className="btn btn-primary" onClick={() => _decline(guestInfo)}>Decline</button>
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
    </div>
  );
};
