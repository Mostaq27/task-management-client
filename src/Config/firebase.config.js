// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD45jBLrtzCVMXF4o-V6sxR2krm5LU0I_s",
  authDomain: "task-manger-28f94.firebaseapp.com",
  projectId: "task-manger-28f94",
  storageBucket: "task-manger-28f94.appspot.com",
  messagingSenderId: "669971252573",
  appId: "1:669971252573:web:ccbdad6bbf2a8c5e5194b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app