 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsmVtgolMjLOtSiBBTeZnClNy9R4LfAuM",
  authDomain: "ebac-16430.firebaseapp.com",
  projectId: "ebac-16430",
  storageBucket: "ebac-16430.appspot.com",
  messagingSenderId: "693056702047",
  appId: "1:693056702047:web:ae067bd82e096e60b1fdea",
  measurementId: "G-2Q5YZLHS84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;