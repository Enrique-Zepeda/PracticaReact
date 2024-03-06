// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCFs7xYTgWyxIaSQphCEQMVr2WzFFcBcY",
  authDomain: "react-the-movie-db.firebaseapp.com",
  projectId: "react-the-movie-db",
  storageBucket: "react-the-movie-db.appspot.com",
  messagingSenderId: "848476724412",
  appId: "1:848476724412:web:d6d3f4f72a26a9add8c4b9",
};

// Initialize Firebase
const fireBase = initializeApp(firebaseConfig);

export default fireBase;
