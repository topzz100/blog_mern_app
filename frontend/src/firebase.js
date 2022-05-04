// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore"
//import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDRn0awKXoA19V-_hCJFp6JGdbd6pGRIU",
  authDomain: "blog-app-9da43.firebaseapp.com",
  projectId: "blog-app-9da43",
  storageBucket: "blog-app-9da43.appspot.com",
  messagingSenderId: "360261227021",
  appId: "1:360261227021:web:66f2cd9dee083424a1bb44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const db = getFirestore();
// export const database = getDatabase(firebaseApp); 
export const storage = getStorage()