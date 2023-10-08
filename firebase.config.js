// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrZpVaO6buY9RoKGQbq-PcDJb26qNbRM4",
  authDomain: "educational-training.firebaseapp.com",
  projectId: "educational-training",
  storageBucket: "educational-training.appspot.com",
  messagingSenderId: "312581422110",
  appId: "1:312581422110:web:e02c74b59ad879191c820f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;