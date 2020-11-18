import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCJ1mkNHGE3PSJxm7oGVpO9nh_YCUubuso",
    authDomain: "facebookmessenger-56d8f.firebaseapp.com",
    databaseURL: "https://facebookmessenger-56d8f.firebaseio.com",
    projectId: "facebookmessenger-56d8f",
    storageBucket: "facebookmessenger-56d8f.appspot.com",
    messagingSenderId: "372243646180",
    appId: "1:372243646180:web:a8cd9b108ba1f195fa8ef1",
    measurementId: "G-YFWVKKPLW9"  
});

const db = firebaseApp.firestore();

export default db;