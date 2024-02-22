import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  //apiKey: import.meta.env.VITE_API_KEY,
  apiKey: "AIzaSyCu_WkCRh9DVry_dGEJneGGiAMuynrNVAg",
  authDomain: "cloud-app-ee96b.firebaseapp.com",
  projectId: "cloud-app-ee96b",
  storageBucket: "cloud-app-ee96b.appspot.com",
  messagingSenderId: "955222460681",
  appId: "1:955222460681:web:d5b0d459812d8f8c0b2bd8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export default app;
