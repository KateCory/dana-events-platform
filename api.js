import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  //doc,
  //getDoc,
  getDocs,
  //query,
  //where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDqN92_8VWwYL4yu5Hh1gw1tCMy-CTLVdg",
  authDomain: "dana-events.firebaseapp.com",
  projectId: "dana-events",
  storageBucket: "dana-events.firebasestorage.app",
  messagingSenderId: "1004507211529",
  appId: "1:1004507211529:web:726d734d3ea0bc2ad0d5d8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const auth = getAuth(app);

// const loginEmailPassword = async () => {
//   const loginEmail = txtEmail.value 
//   const loginPassword = txtPassword.value

//   const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
//   console.log(userCredential.user)
// }

const eventsCollectionRef = collection(db, "events"); // gets a collection reference instance


export async function getEvents() {
  const querySnapshot = await getDocs(eventsCollectionRef);
  
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })); 
  console.log(dataArr, ">>> api.js")
  return dataArr; 
}

// call to the function called getDocs()
// querySnapshot returns a load of additional meta data about the docs when we take the snapshot
// so turn it into a data array that mirrors the same data structure that we're already expecting in our component files
// .docs - an array of those documents that I can then map over, look at each document in the array and return an object
// do it in-line, surround obj in parantheses
// ...doc.data() - calling it as a function does what exactly?
// the above doesn't include id so need to include that

// export async function getEvent(id) {
//   const docRef = doc(db, "events", id);
//   const vanSnapshot = await getDoc(docRef);
//   return {
//     ...vanSnapshot.data(), // the data portion of the vanSnapshot - why is this a function?
//     id: vanSnapshot.id,
//   };
// }

// doc() - get reference to a single document


