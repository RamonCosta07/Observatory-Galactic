// firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY_FIREBASE,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN_FIREBASE,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID_FIREBASE,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, db, googleProvider, facebookProvider, githubProvider};
