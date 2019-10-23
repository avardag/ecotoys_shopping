import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_appId,
  measurementId: process.env.REACT_APP_FIREBASE_measurementId
};

//func to store user from google signin in firebase db 'users' collection
export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if(!userAuth) return; //if no user created(or didnt sign in) return

  // const userRef = firestore.doc("users/jkaalflhf")//fake
  //DocumentReference - obj that represents the 'current' place in the db that we r querying
  //it not have the actual data of the col or doc. it has properties that tell us details aboit it
  //or the method to get the Snapshot obj which give us the data we r looking for
  //use DocumentRef to perfom our CRUD operations
  //docRef methods: .set(), .get(), .update(), .delete()
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  //we can also add docs to collections using collectionRef object using .add() // colRef.add({value: prop})
  
  //we get snapshotObj from the reference obj using .get() //docRef.get() or colRef.get()
  //DocumentSnapshot
  //use 
  const snapShot = await userRef.get();

  //create user doc w/ info of userAuth
  if(!snapShot.exists){ //if no such user in 'users' collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData // add if there is add.data
      })
    } catch (error) {
      console.log('error creating user', error.message)    
    }
  }
  //return userRef , in case needed in project
  return userRef;
}

//util for 1 time use, to add docs and collections to firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch(); //to move data by batches, to ensure all data is moved
  objectsToAdd.forEach(objectToAdd=>{
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, objectToAdd)
  })

  return batch.commit();
}

export const convertCollectionsSnapshotToMap = (collectionsSnapshot)=>{
  const transformedCollection = collectionsSnapshot.docs.map(doc=>{
    const {title, items} = doc.data();

    return {
      routeName : encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  // convert array to object for frontend
  return transformedCollection.reduce((acc, collection)=> {
    acc[collection.title.toLowerCase()] = collection
    return acc
  }, {})
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Configure google signIn

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
