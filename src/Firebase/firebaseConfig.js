import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNC-oK3bFbapmvSKRD34XHTtPT7LomFsQ",
  authDomain: "shopdatabase-551f5.firebaseapp.com",
  databaseURL:
    "https://shopdatabase-551f5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shopdatabase-551f5",
  storageBucket: "shopdatabase-551f5.appspot.com",
  messagingSenderId: "910513063651",
  appId: "1:910513063651:web:8c628f4ac9be93b64467d6",
  measurementId: "G-BF0HT378JS",
};
const app = initializeApp(firebaseConfig);

function WriteUserData(userId, name, email, imageUrl) {
  const db = getDatabase();

  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

export default WriteUserData;
