import React, { useState } from 'react';
import { db } from '../../firebase';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const SearchStep = (props) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
  });
  const [showError, setShowError] = useState(false);
  const handleClose = () => {
    setShowError(false);
  };

  // Needed to have defaultValue when using next/previous buttons
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

  const getGuestInfo = () => {
    const { firstName, lastName } = state;
    db.collection('guests')
      .where('firstName', '==', firstName.trim())
      .where('lastName', '==', lastName.trim())
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size > 0) {
          querySnapshot.forEach((doc) => {
            let guestInfo = doc.data();
            getPartyMembers(guestInfo.partyId);
          });
        } else {
          setShowError(true);
          console.log('No documents found for given input');
        }
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }

  const getPartyMembers = (partyId) => {
    let partyMembers = [];
    db.collection('guests')
      .where('partyId', '==', partyId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let guestInfo = doc.data();
          partyMembers.push({
            id: doc.id,
            data: guestInfo,
          });
        });
        // Now pass this data to the RsvpStep
        props.setPartyData(partyMembers);
        props.setCurrStep(props.step + 1);
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }

  return (
    <div className="search-step">
      <p>
        If you're responding for yourself and a guest (or your family), you'll be able to RSVP for your entire group.
      </p>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          className="form-control"
          onChange={handleChange}
          defaultValue={state.firstName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          className="form-control"
          onChange={handleChange}
          defaultValue={state.lastName}
        />
      </div>

      <button className="btn btn-dark mt-3" onClick={handleSubmit}>
        Search
      </button>
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="error">
          <AlertTitle>Error</AlertTitle>
          Did you enter your name correctly? Please try again.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SearchStep;