'use strict';
import RsvpModal from './rsvp-modal';
ReactDOM.render(<RsvpModal />, document.querySelector('rsvp-modal-container'));

console.log(firebase);
const db = firebase.firestore();

let guestsRef;

const scriptURL = 'https://script.google.com/macros/s/AKfycbzYM3D-VZDfpc7Y2W0mb-aGJzXcA5MErQ63NCE3ROjhTKi8_-6i/exec'
const form = document.forms['rsvp-form']

form.addEventListener('submit', e => {
  e.preventDefault();
  let formData = new FormData(form);
  let rsvp = JSON.parse(JSON.stringify(Object.fromEntries(formData)));
  console.log(rsvp);
  guestsRef = db.collection('guests');
  const { serverTimestamp } = firebase.firestore.FieldValue;
  guestsRef.add({
    name: rsvp.name,
    attending: rsvp.response,
    timestamp: serverTimestamp()
  });

  // fetch(scriptURL, {
  //     method: 'POST',
  //     body: new FormData(form)
  //   })
  //   .then(response => console.log('Success!', response))
  //   .catch(error => console.error('Error!', error.message))
  // $('#rsvpModal').modal('hide');
})