import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBAtFA7IyT0aTZoyRU6T0FVBShe5VBHtH4",
  authDomain: "emma-ef7d1.firebaseapp.com",
  projectId: "emma-ef7d1",
  storageBucket: "emma-ef7d1.appspot.com",
  messagingSenderId: "292812762820",
  appId: "1:292812762820:web:83efe184d399b8979a2391",
  measurementId: "G-2P4DC1BCHF"
};

const Firebase= firebase.initializeApp(firebaseConfig);

export default Firebase;

