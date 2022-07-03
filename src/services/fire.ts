import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { IAddLinkRecord } from "interfaces";

const apiKey = process.env.API_KEY;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey,
  authDomain: "react-2022-05.firebaseapp.com",
  projectId: "react-2022-05",
  storageBucket: "react-2022-05.appspot.com",
  messagingSenderId: "598556501810",
  appId: "1:598556501810:web:3830854e3b26208c9cd92b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const timestamp = serverTimestamp;

// NEW Functional
// Work with Firestore
const db = getFirestore();
const linkCollectionRef = collection(db, "links");
// const linksCollection = getDocs(linkCollectionRef);

// add record to images collection
export const addLinkRecord = ({ data, cb }: IAddLinkRecord) =>
  addDoc(linkCollectionRef, data).then(() => {
    cb();
  });
