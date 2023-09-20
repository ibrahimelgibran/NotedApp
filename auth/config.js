import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}

export const FirebaseAuth = getAuth()

export const SignUp = async(email, password) => {
  await createUserWithEmailAndPassword(FirebaseAuth, email, password)
}

export const SignIn = async(email, password) => {
  await signInWithEmailAndPassword(FirebaseAuth, email, password)
}

export const SignOut = async() => {
  await signOut(FirebaseAuth)
}
