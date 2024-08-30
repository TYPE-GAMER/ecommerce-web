
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAvujdXGIOzMTZgqjSECPGgiXU3IEz92sA",
  authDomain: "eshop-646bc.firebaseapp.com",
  projectId: "eshop-646bc",
  storageBucket: "eshop-646bc.appspot.com",
  messagingSenderId: "159446757831",
  appId: "1:159446757831:web:e079c030d43dd0709829e2"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);

export default app;