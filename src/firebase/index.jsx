import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAq5nkHJTh0D3Dj-f1oj462V83cyxxbs2U",
  authDomain: "contacts-90c22.firebaseapp.com",
  projectId: "contacts-90c22",
  storageBucket: "contacts-90c22.appspot.com",
  messagingSenderId: "465610914144",
  appId: "1:465610914144:web:7669497f0ed4653e0a8605"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
