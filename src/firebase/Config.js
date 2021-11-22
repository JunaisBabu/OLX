import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_aWx8POjjc1rOtBkgBaw5ceeDfk_cUS8",
    authDomain: "olx-new-99a7a.firebaseapp.com",
    projectId: "olx-new-99a7a",
    storageBucket: "olx-new-99a7a.appspot.com",
    messagingSenderId: "74711543650",
    appId: "1:74711543650:web:286454648a523ec473c63b",
    measurementId: "G-7BWQJQHM3J"
  };
  
  export default firebase.initializeApp(firebaseConfig)