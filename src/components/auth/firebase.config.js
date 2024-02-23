

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBy8sM6YSKqwovrf1IyTaFzAP2hsipAA8Q",
  authDomain: "job-task-b7fbf.firebaseapp.com",
  projectId: "job-task-b7fbf",
  storageBucket: "job-task-b7fbf.appspot.com",
  messagingSenderId: "541288541439",
  appId: "1:541288541439:web:f571258884e879bc88f0ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
