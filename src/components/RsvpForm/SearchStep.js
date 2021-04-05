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

  // function getGuestInfo() {
  //   const {firstName, lastName} = state;
  //   db.collection('guests')
  //     .where('firstName', '==', firstName)
  //     .where('lastName', '==', lastName)
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.data());
  //         let guestInfo = doc.data();
  //         getPartyMembers(guestInfo.partyId);
  //       });
  //     })
  //     .catch((error) => {
  //       console.log('Error getting documents: ', error);
  //     });
  // }
  function getGuestInfo() {
    const {firstName, lastName} = state;
    getPartyMembers();
  }

  // function getPartyMembers(partyId) {
  //   let partyMembers = [];
  //   db.collection('guests')
  //   .where('partyId', '==', partyId)
  //   .get()
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       partyMembers.push(doc.data());
  //     });
  //     console.log(partyMembers);
  //     // Now pass this data to the RsvpStep
  //     props.setPartyData(partyMembers);
  //     props.setCurrStep(props.step + 1);
  //   })
  //   .catch((error) => {
  //     console.log('Error getting documents: ', error);
  //   });
  // }
  function getPartyMembers() {
    const partyMembers = [{
      firstName: "Alexio",
      hasResponded: false,
      isAttending: false,
      lastName: "Mota",
      partyId: 1
    }, {
      firstName: "Alison",
      hasResponded: false,
      isAttending: false,
      lastName: "Hernandez",
      partyId: 1
    }];
    props.setPartyData(partyMembers);
    props.setCurrStep(props.step + 1);
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
