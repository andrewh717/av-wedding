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
let rowRef;
fs.createReadStream('guestList.csv')
  .pipe(csv())
  .on('data', (row) => {
    // console.log(row);
    rowRef = db.collection('guests').doc();
    batch.set(rowRef, row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    batch.commit().then(() => {
      console.log('Firestore batch write successful');
    });
  });

  // GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json" node guestListUpload.js
