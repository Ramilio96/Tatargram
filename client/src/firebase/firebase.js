import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDgkZb4EgOTU6Z5tRl2AGsOd_ydKvOLo9I",
  authDomain: "tatargram-c86f4.firebaseapp.com",
  projectId: "tatargram-c86f4",
  storageBucket: "tatargram-c86f4.appspot.com",
  messagingSenderId: "587532305451",
  appId: "1:587532305451:web:8508ba16c71644357a566e",
  measurementId: "G-E0ZCH0P86G",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
