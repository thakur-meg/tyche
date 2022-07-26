import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBDvpz4r7gmgJt1h97_WO1OhAQa72tqIBg",
    authDomain: "tyche-9c838.firebaseapp.com",
    projectId: "tyche-9c838",
    storageBucket: "tyche-9c838.appspot.com",
    messagingSenderId: "200082536627",
    appId: "1:200082536627:web:04a7f311579b04da5d18c6",
    measurementId: "G-216DBY0KZ9"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
      const response = await auth.signInWithPopup(googleProvider);
      console.log(response.user);
      const user = response.user;
      console.log(`User ID - ${user.uid}`);
      const querySnapshot = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get();
      if (querySnapshot.docs.length === 0) {
        // create a new user
        await db.collection("users").add({
          uid: user.uid,
          enrolledClassrooms: [],
        });
      }
    } catch (err) {
      alert(err.message);
    }
  };
  
const logout = () => {
    auth.signOut();
  };
  
  export { app, auth, db, signInWithGoogle, logout };