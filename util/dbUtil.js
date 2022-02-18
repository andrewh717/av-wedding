const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://av-wedding-2022.firebaseio.com',
});

const updateAllDocs = () => {
  const db = admin.firestore();
  const batch = db.batch();
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

updateAllDocs();

// GOOGLE_APPLICATION_CREDENTIALS="./serviceAccountKey.json" node dbUtil.js
