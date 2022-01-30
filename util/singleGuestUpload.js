// This file is used to update Firestore with a guest list in CSV format
const admin = require('firebase-admin');
// Fill in this object with the guest's data
const guest = {
  firstName: "firstName",
  lastName: "lastName",
  hasResponded: false,
  isAttending: false,
  partyId: -1,
  count: -1
}

admin.initializeApp({
  credential:  admin.credential.applicationDefault(),
  databaseURL: "https://av-wedding-2022.firebaseio.com"
});

const db = admin.firestore();
const batch = db.batch();
let guestId = `${guest.firstName.charAt(0)}${guest.lastName}${guest.partyId}${guest.count}`;
let guestRef = db.collection('guests').doc(guestId);
let guestData = {
  firstName: guest.firstName,
  lastName: guest.lastName,
  partyId: Number(guest.partyId),
  hasResponded: (guest.hasResponded === true),
  isAttending: (guest.isAttending === true)
}
batch.set(guestRef, guestData);
batch.commit().then(() => {
  console.log('Firestore batch write successful');
});

// GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json" node singleGuestUpload.js
