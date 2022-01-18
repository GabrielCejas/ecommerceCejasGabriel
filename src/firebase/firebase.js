import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB__tFqtPxR4x6nb9tcaJKOc7j9l6pa54c",
  authDomain: "appcejas.firebaseapp.com",
  projectId: "appcejas",
  storageBucket: "appcejas.appspot.com",
  messagingSenderId: "202703018157",
  appId: "1:202703018157:web:bbc0a67c86a4b0af864e24",
};

const app = initializeApp(firebaseConfig);

export const bDato = getFirestore(app);
