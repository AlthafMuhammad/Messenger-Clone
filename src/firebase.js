import firebase from 'firebase';

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyDTEHfew75ESSeYFBusirCDvr4d58VtI-k",
    authDomain: "messenger-clone-9e061.firebaseapp.com",
    databaseURL: "https://messenger-clone-9e061.firebaseio.com",
    projectId: "messenger-clone-9e061",
    storageBucket: "messenger-clone-9e061.appspot.com",
    messagingSenderId: "907031836511",
    appId: "1:907031836511:web:7ff4d293f44aca6807e8ea",
    measurementId: "G-WW9C5FJN5H"
});

const db=firebase.firestore();

export default db;