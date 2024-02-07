
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCx3TxYAansR41blB8OTmR_6m3oQDSqRVE",
  authDomain: "testing-1837e.firebaseapp.com",
  projectId: "testing-1837e",
  storageBucket: "testing-1837e.appspot.com",
  messagingSenderId: "938932085900",
  appId: "1:938932085900:web:76c4f6bdcd483aeb0e07a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;