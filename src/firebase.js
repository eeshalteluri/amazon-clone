import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfCAfVrLSq6yDgO0J0HCBx09fwBq5w3KE",
    authDomain: "clone-b7609.firebaseapp.com",
    projectId: "clone-b7609",
    storageBucket: "clone-b7609.appspot.com",
    messagingSenderId: "261690639939",
    appId: "1:261690639939:web:d2f651db1be9becf7276f6",
    measurementId: "G-4142RRED8V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export  { db, auth };

  