// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCUcwcwqhng40N7wV2Ds2464FhqAJhjWW0",
  authDomain: "docs-clone-1c654.firebaseapp.com",
  projectId: "docs-clone-1c654",
  storageBucket: "docs-clone-1c654.appspot.com",
  messagingSenderId: "810577018833",
  appId: "1:810577018833:web:d707d6316638751211eaf0"
};

// Initialize Firebase
const app = !firebase.apps.length ? initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
export {db, app};