const admin = require('firebase-admin');
const csv = require('@fast-csv/format');
const fs = require('fs');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://av-wedding-2022.firebaseio.com',
});

const db = admin.firestore();
const batch = db.batch();

const updateAllDocs = () => {
  db.collection('guests')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const docRef = doc.ref;
        const firstName = doc.data().firstName.toUpperCase();
        const lastName = doc.data().lastName.toUpperCase();
        batch.update(docRef, {
          _fullName: firstName + lastName,
        });
      });
      batch.commit().then(() => {
        console.log('Firestore batch write successful');
      });
    });
}

const getHasNotRespondedList = () => {
  const writeStream = fs.createWriteStream('hasNotResponded.csv', { flags: 'a' });
  const hasNotRespondedList = [];
  db.collection('guests')
      .where('hasResponded', '==', false)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((guest) => {
          hasNotRespondedList.push(guest.data());
        });
        csv.write(hasNotRespondedList, { headers: true }).pipe(writeStream);
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
}



// updateAllDocs();
// getHasNotRespondedList();

// GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json" node dbUtil.js
