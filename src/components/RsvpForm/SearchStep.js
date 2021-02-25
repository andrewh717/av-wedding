import React, { useState } from 'react';
import { db } from '../../firebase';

export default function SearchStep(props) {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    // console.log(state);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getGuestInfo();
  };

  if (props.step !== 0) {
    return null;
  }

  function getGuestInfo() {
    const {firstName, lastName} = state;
    db.collection('guests')
      .where('firstName', '==', firstName)
      .where('lastName', '==', lastName)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          let guestInfo = doc.data();
          getPartyMembers(guestInfo.partyId);
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }

  function getPartyMembers(partyId) {
    let partyMembers = [];
    db.collection('guests')
    .where('partyId', '==', partyId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        partyMembers.push(doc.data());
      });
      console.log(partyMembers);
      // Now pass this data to the RsvpStep
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
  }

  return (
    <div>
      <label htmlFor="firstName">First name</label>
      <input type="text" id="firstName" defaultValue={state.firstName} onChange={handleChange} />

      <label htmlFor="lastName">Last name</label>
      <input type="text" id="lastName" defaultValue={state.lastName} onChange={handleChange} />

      <button className="btn btn-primary" onClick={handleSubmit}>Search</button>
    </div>
  );
}
