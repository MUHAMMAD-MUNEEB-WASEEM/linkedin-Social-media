import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDUdfLCHFAHvs9sc5h7O-jJfJ0P8n1U5BY",
    authDomain: "linkedin-311e5.firebaseapp.com",
    projectId: "linkedin-311e5",
    storageBucket: "linkedin-311e5.appspot.com",
    messagingSenderId: "650316104831",
    appId: "1:650316104831:web:55793589eabf36d1b16b4a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth, db}