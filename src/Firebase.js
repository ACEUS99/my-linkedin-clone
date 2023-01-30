import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyAFz7Fo7knK2zFdfV8j4qx86vndRyUUMek",
    authDomain: "linkedin-clone-2e4ee.firebaseapp.com",
    projectId: "linkedin-clone-2e4ee",
    storageBucket: "linkedin-clone-2e4ee.appspot.com",
    messagingSenderId: "915540068576",
    appId: "1:915540068576:web:a91ed16205a7c50612a885"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  


  export {db, auth}