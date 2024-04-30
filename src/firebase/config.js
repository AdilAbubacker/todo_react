import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAuhncbZcEs4c2NhCQ5K4Lhlc-0YbrlQ38",
    authDomain: "fir-7c81d.firebaseapp.com",
    projectId: "fir-7c81d",
    storageBucket: "fir-7c81d.appspot.com",
    messagingSenderId: "674362850976",
    appId: "1:674362850976:web:0341f11e200c4fa00313c5",
    measurementId: "G-HF23D7FVMW"
  };

export const Firebase = firebase.initializeApp(firebaseConfig)