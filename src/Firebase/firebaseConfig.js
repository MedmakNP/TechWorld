import { initializeApp } from "firebase/app";
import { getDatabase, get, ref } from "firebase/database";
import { useState, useEffect } from "react";
//import { getStorage,  getDownloadURL } from "firebase/storage";
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
const db = getDatabase();

/* function WriteUserData() {
  set(ref(db, "products/6"), {
    name:'iPhone Silicone Case',
    cost: [39],
    color: ['Blue','Black','Pink'],
    Memory: ['iphone 11','iPhone 11 Pro Max'],
    img: ['https://firebasestorage.googleapis.com/v0/b/shopdatabase-551f5.appspot.com/o/images%2Fcase-11pro-blue-1.png?alt=media&token=d6c03bfe-404d-4f92-8e08-db89ae11c6b3',
          'https://firebasestorage.googleapis.com/v0/b/shopdatabase-551f5.appspot.com/o/images%2Fcase-11pro-black-1.png?alt=media&token=49d03d0f-d38d-44fb-a1f8-a4e5e1bb95cb',
          'https://firebasestorage.googleapis.com/v0/b/shopdatabase-551f5.appspot.com/o/images%2Fcase-11pro-pink-1.png?alt=media&token=0b898bcd-0a59-4da6-9ea0-dac9f519bd26'
           ],
    characterisctics:[
      ['Manufacturer','Apple']
    ]
  });

} */
const useData = (path) => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRef = ref(db, path);
        const snapshot = await get(usersRef);
        if (snapshot.exists()) {
          setProductData(snapshot.val());
          //console.log(snapshot.val());
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [path]);
  return productData;
};

export default useData;
