import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  //query,
  //where,
} from "firebase/firestore/lite";
import axios from "axios"

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

export async function getEventDetail(id) {
  const docRef = doc(db, "events", id)

  const eventSnapshot = await getDoc(docRef)
  console.log({
    ...eventSnapshot.data(),
    id: eventSnapshot.id
  })
  return {
    ...eventSnapshot.data(),
    id: eventSnapshot.id
  }
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

console.log(axios.get('https://api.lyrics.ovh/v1/oasis/wonderwall'))

// This is because the axios methods return a promise when invokedThis is because the axios methods return a promise when invoked

axios
  .get('https://api.lyrics.ovh/v1/oasis/wonderwall')
  .then((response) => {
    // handle success
    console.log(response);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })

  // axios
  //   .get('https://www.eventbrite.com/v3/events//?token=GVEX3J5GVK4GVEQQPR')
  //   .then((response) => {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     // handle error
  //     console.log(error);
  //   })

  // const organizer_id = "85400788973"
  // const id = "1052628830167"



  // -H 'Authorization: Bearer PERSONAL_OAUTH_TOKEN' 

  // axios
  //   .get('https://www.eventbriteapi.com/v3/organizations/85400788973/events/v3/users/me/?token=GVEX3J5GVK4GVEQQPR')
  //   .then((response) => {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     // handle error
  //     console.log(error);
  //   })

const accessToken = "ROURJFYLPLXM5JKCEIYB"

const fetchEvents = async () => {
  const response = await fetch('https://www.eventbriteapi.com/v3/events/1052628830167', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
  const events = await response.json();
  console.log('Events:', events.events);
}

fetchEvents();


