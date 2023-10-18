import { initializeApp } from "firebase/app";
import{getFirestore}from '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAYUQSlshZTwMh27oG6jkAyABZS_S-EDQM",
    authDomain: "tourism-6ce81.firebaseapp.com",
    projectId: "tourism-6ce81",
    storageBucket: "tourism-6ce81.appspot.com",
    messagingSenderId: "499007291447",
    appId: "1:499007291447:web:9198eacd34e4fef5a83fb2",
    measurementId: "G-1C727NMWCH"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)