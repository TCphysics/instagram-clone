import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAcsjeJ2lx-3z7kZNyub7vmqNaiVwuzYEk",
    authDomain: "instagram-clone-chentang.firebaseapp.com",
    databaseURL: "https://instagram-clone-chentang-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-chentang",
    storageBucket: "instagram-clone-chentang.appspot.com",
    messagingSenderId: "661521370201",
    appId: "1:661521370201:web:c0dab3853381512153b548",
    measurementId: "G-YG12EBT28Y"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
