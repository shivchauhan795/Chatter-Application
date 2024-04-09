// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEAMJGVj7qZXdKKliJtT4DdqHgnrlRRdU",
    authDomain: "chatter-application-10871.firebaseapp.com",
    projectId: "chatter-application-10871",
    storageBucket: "chatter-application-10871.appspot.com",
    messagingSenderId: "398692869950",
    appId: "1:398692869950:web:a5b76a795db6811455ae6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);