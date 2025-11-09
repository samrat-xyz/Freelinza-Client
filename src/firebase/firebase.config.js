// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOBhJW18nVjiXBoVO1o3kYJYw3Inma7aM",
  authDomain: "freelinza.firebaseapp.com",
  projectId: "freelinza",
  storageBucket: "freelinza.firebasestorage.app",
  messagingSenderId: "603303812896",
  appId: "1:603303812896:web:a7916110b66f7a8e990145"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);