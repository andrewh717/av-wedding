import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYqDD74AI3__a7Xyy2U5T1PE5idZj2c_g",
  authDomain: "av-wedding-2022.firebaseapp.com",
  databaseURL: "https://av-wedding-2022.firebaseio.com",
  projectId: "av-wedding-2022",
  storageBucket: "av-wedding-2022.appspot.com",
  messagingSenderId: "329350156856",
  appId: "1:329350156856:web:8c7b37cfdad9e622394ccd",
  measurementId: "G-TBPSCL803E"
});

firebase.analytics();


const db = firebaseApp.firestore();

export { db };