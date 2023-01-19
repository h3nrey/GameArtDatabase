// Import the functions you need from the SDKs you need
import firebase  from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNodx_jje2hVdRKxXZeHFtY1xvsTSMtlA",
  authDomain: "gameartdatabse.firebaseapp.com",
  projectId: "gameartdatabse",
  storageBucket: "gameartdatabse.appspot.com",
  messagingSenderId: "495522994680",
  appId: "1:495522994680:web:b9487d4e713207dfb31e0d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = goog(app);
export {firebase, auth, app};