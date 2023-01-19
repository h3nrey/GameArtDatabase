import { initializeApp } from "firebase/app"; //conection with app
import { getAuth} from "firebase/auth" // conection with authorization service

//app configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx-MyuM9GDwqTd11V4k0DUl4TyV6ENfXM",
  authDomain: "gameartdatabase-41494.firebaseapp.com",
  projectId: "gameartdatabase-41494",
  storageBucket: "gameartdatabase-41494.appspot.com",
  messagingSenderId: "657628617399",
  appId: "1:657628617399:web:3739994c6fec7f53864b32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);