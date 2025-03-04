// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNoJTKp2RogecKDCp6eKB_LWS9ML1u7p8",
  authDomain: "ana-piva.firebaseapp.com",
  databaseURL: "https://ana-piva-default-rtdb.firebaseio.com",
  projectId: "ana-piva",
  storageBucket: "ana-piva.firebasestorage.app",
  messagingSenderId: "426467902484",
  appId: "1:426467902484:web:2399316d83e6c1695e1301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export {db, analytics};





// kizitocristiano@gmail.com
// Agostinho10