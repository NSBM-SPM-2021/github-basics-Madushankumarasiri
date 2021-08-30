import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyB8oSXeHcuQ1jY_soUZVBoOjht5M5heQqg",
    authDomain: "expense-tracker-38225.firebaseapp.com",
    projectId: "expense-tracker-38225",
    storageBucket: "expense-tracker-38225.appspot.com",
    messagingSenderId: "78472020722",
    appId: "1:78472020722:web:b9f56dc94da59c6d8b866b",
    measurementId: "G-GMQZJGHVEC"
  };

  const firebaseRef = firebase.initializeApp(firebaseConfig);

  export default firebaseRef;

  