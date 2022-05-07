// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmRAL1SbKNnYzAuFSN8UgamTjngyB7CDQ",
  authDomain: "jimoguru-db.firebaseapp.com",
  databaseURL: "https://jimoguru-db-default-rtdb.firebaseio.com",
  projectId: "jimoguru-db",
  storageBucket: "jimoguru-db.appspot.com",
  messagingSenderId: "1061260449171",
  appId: "1:1061260449171:web:fd7732ce563e0e17b24466",
  measurementId: "G-NGSVVVVMK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const auth = getAuth();
// // const email = getAuth();
// // const password = getAuth();
// // SignUp
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// // SignIn
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// // 認証状態オブザーバーを設定してユーザーデータを取得する
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

// export default function (app, inject) {
//   //（'呼び出すときの名前','firebase内の機能を呼び出している'）
//   inject('firebase', firebase) 
//   inject('auth', firebase.auth())
// }