import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLgKlNO5etJhgRIFiZ9XHSW2jSFmYyrgs",
  authDomain: "ostrowskiecommerce.firebaseapp.com",
  databaseURL: "https://ostrowskiecommerce.firebaseio.com",
  projectId: "ostrowskiecommerce",
  storageBucket: "ostrowskiecommerce.appspot.com",
  messagingSenderId: "253617457315",
  appId: "1:253617457315:web:abc40d16522ba5411e5716",
};

export const createUserProfileDocument = async (userAuth, addData)=>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists){
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addData
      })
    }catch(error){
      console.log("error creating user: ", error.message)
    }
  }
  return userRef
}

firebase.initializeApp(firebaseConfig);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef)

  const batch = firestore.batch()
  objectsToAdd.forEach(obj =>{
    const newDocRef = collectionRef.doc()
    console.log(newDocRef)
    batch.set(newDocRef, obj)
  })
 return await batch.commit()
}

export const convertCollectionsSnapshotToMap =(collections)=>{
  const transformedCollection = collections.docs.map(doc=>{
    const {title, items}  = doc.data()
    return {
      title,
      items,
      route: encodeURI(title.toLowerCase()),
      id: doc.id
    }
  })
return transformedCollection.reduce((accumulator, collection)=> {
  accumulator[collection.title.toLowerCase()] = collection;
  
  return accumulator

}, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

