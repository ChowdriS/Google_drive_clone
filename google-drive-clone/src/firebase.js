import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyA7kbzAlM6SL6pccej8kpKWv1qknwajcEE",
  authDomain: "auth-development-25270.firebaseapp.com",
  projectId: "auth-development-25270",
  storageBucket: "auth-development-25270.appspot.com",
  messagingSenderId: "1044855922638",
  appId: "1:1044855922638:web:d0fc4999990c00cd9a159f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth }; 
export default app;
