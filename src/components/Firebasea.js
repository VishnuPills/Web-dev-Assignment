import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyAyltvV6nLglZq4uIZg7ZDKXIy-SrmnKJw",
  
    authDomain: "naya-hai-7baf9.firebaseapp.com",
  
    projectId: "naya-hai-7baf9",
  
    storageBucket: "naya-hai-7baf9.appspot.com",
  
    messagingSenderId: "175439053030",
  
    appId: "1:175439053030:web:0babe91fe14d83b267fb27"
  
  };
  
  const firebaseApp =firebase.initializeApp(firebaseConfig);  
  const db = firebaseApp.firestore(firebaseApp);
  const auth = firebase.auth();
  export { db , auth ,firebase};
  
