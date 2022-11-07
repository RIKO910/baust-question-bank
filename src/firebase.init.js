// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3rey_0b955UEhyQJ5inVxlaF4GxgSxRc",
  authDomain: "baust-question-bank-3a4e9.firebaseapp.com",
  projectId: "baust-question-bank-3a4e9",
  storageBucket: "baust-question-bank-3a4e9.appspot.com",
  messagingSenderId: "29965913222",
  appId: "1:29965913222:web:d845eeda8f08c0085e9507"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;