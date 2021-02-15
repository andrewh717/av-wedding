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
    search();
  };

  if (props.step !== 0) {
    return null;
  }

  function search() {
    const {firstName, lastName} = state;
    console.log('inside search function', firstName, lastName);
    db.collection('guests')
      .where('firstName', '==', firstName)
      .where('lastName', '==', lastName)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          // Do stuff with data found
          // TODO: Get everyone in this person's party and pass all the data to RsvpStep
        });
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
