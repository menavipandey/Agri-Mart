import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVH6hxbb3-3D4LAHWFKdwcq87fdtPTxcE",
  authDomain: "agrimart-2b503.firebaseapp.com",
  projectId: "agrimart-2b503",
  storageBucket: "agrimart-2b503.appspot.com",
  messagingSenderId: "748361133005",
  appId: "1:748361133005:web:57d5c5c530d0f3c1783284",
  measurementId: "G-1BV42340W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth(app);
const  provider = new GoogleAuthProvider();

export{auth,provider};

