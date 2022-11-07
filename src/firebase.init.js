// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqq-Ml2xUXnoZnQmBPDC1y6RHwr8X6NH0",
  authDomain: "baust-question-bank-2afa9.firebaseapp.com",
  projectId: "baust-question-bank-2afa9",
  storageBucket: "baust-question-bank-2afa9.appspot.com",
  messagingSenderId: "449209860720",
  appId: "1:449209860720:web:9128f05d9b48bd2a522ab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth =getAuth(app)


export default app;