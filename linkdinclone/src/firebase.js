import firebase from 'firebase';
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: "AIzaSyAPrJ9AKXCeW0ADSeSgrSwHfGa1FSWrSzM",
    // authDomain: "whatsapp-a202e.firebaseapp.com",
    // projectId: "whatsapp-a202e",
    // storageBucket: "whatsapp-a202e.appspot.com",
    // messagingSenderId: "780939771725",
    // appId: "1:780939771725:web:cd227229badd13d2524104",
    // measurementId: "G-661N4438YK"
    apiKey: "AIzaSyBYEu5Fm4KJRgkPdmF5-ZRm3OOvwOY4-Cg",
    authDomain: "linkdin-776b7.firebaseapp.com",
    projectId: "linkdin-776b7",
    storageBucket: "linkdin-776b7.appspot.com",
    messagingSenderId: "265113797841",
    appId: "1:265113797841:web:4fb79cd03cffa2bdc2b1f0",
    measurementId: "G-CYQF5ZV5RV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // Connects to our database
const db = firebaseApp.firestore(); // Get db
const auth = firebase.auth(); // This gives us access to auth (login support)

const googleProvider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage();

export { db, auth, googleProvider, storage };