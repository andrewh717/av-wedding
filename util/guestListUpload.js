// This file is used to update Firestore with a guest list in CSV format
const admin = require('firebase-admin');
const csv = require('csv-parser');
const fs = require('fs');

admin.initializeApp({
  credential:  admin.credential.applicationDefault(),
  databaseURL: "https://av-wedding-2022.firebaseio.com"
});

const db = admin.firestore();
const batch = db.batch();
let rowRef, rowData, rowId;
let count = 1;
fs.createReadStream('guestList.csv')
  .pipe(csv())
  .on('data', (row) => {
    rowId = `${row.firstName.charAt(0)}${row.lastName}${row.partyId}${count}`;
    rowRef = db.collection('guests').doc(rowId);
    rowData = {
      firstName: row.firstName,
      lastName: row.lastName,
      partyId: Number(row.partyId),
      hasResponded: (row.hasResponded === true),
      isAttending: (row.isAttending === true)
    };
    batch.set(rowRef, rowData);
    count++;
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    batch.commit().then(() => {
      console.log('Firestore batch write successful');
    });
  });

  // GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json" node guestListUpload.js
