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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getGuestInfo();
  };

  if (props.step !== 0) {
    return null;
  }

  function getGuestInfo() {
    const { firstName, lastName } = state;
    db.collection('guests')
      .where('firstName', '==', firstName)
      .where('lastName', '==', lastName)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size > 0) {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            let guestInfo = doc.data();
            getPartyMembers(guestInfo.partyId);
          });
        } else {
          console.log('No documents found for given input');
        }
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }
  // function getGuestInfo() {
  //   const {firstName, lastName} = state;
  //   getPartyMembers();
  // }

  function getPartyMembers(partyId) {
    let partyMembers = [];
    db.collection('guests')
      .where('partyId', '==', partyId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log('Document ID: ', doc.id)
          let guestInfo = doc.data();
          partyMembers.push({
            id: doc.id,
            data: guestInfo,
          });
        });
        console.log(partyMembers);
        // Now pass this data to the RsvpStep
        props.setPartyData(partyMembers);
        props.setCurrStep(props.step + 1);
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }
  // function getPartyMembers() {
  //   const partyMembers = [{
  //     firstName: "Alexio",
  //     hasResponded: false,
  //     isAttending: false,
  //     lastName: "Mota",
  //     partyId: 1
  //   }, {
  //     firstName: "Alison",
  //     hasResponded: false,
  //     isAttending: false,
  //     lastName: "Hernandez",
  //     partyId: 1
  //   }];
  //   props.setPartyData(partyMembers);
  //   props.setCurrStep(props.step + 1);
  // }

  return (
    <div className="search-step">
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" className="form-control" onChange={handleChange} defaultValue={state.firstName} />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" className="form-control" onChange={handleChange} defaultValue={state.lastName} />
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}
