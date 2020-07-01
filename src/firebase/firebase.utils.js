import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBLgKlNO5etJhgRIFiZ9XHSW2jSFmYyrgs",
    authDomain: "ostrowskiecommerce.firebaseapp.com",
    databaseURL: "https://ostrowskiecommerce.firebaseio.com",
    projectId: "ostrowskiecommerce",
    storageBucket: "ostrowskiecommerce.appspot.com",
    messagingSenderId: "253617457315",
    appId: "1:253617457315:web:abc40d16522ba5411e5716"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: "select_account"})
  export const signInWithGoogle =()=> auth.signInWithPopup(provider)

  export default firebase