import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, addDoc, query, where, collection, getDocs, Timestamp  } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyADsZqGMQDHt0u-MXFhXkBzjsyoB7Qlaxc",
    authDomain: "wolf-informatica-ca665.firebaseapp.com",
    databaseURL: "https://wolf-informatica-ca665-default-rtdb.firebaseio.com",
    projectId: "wolf-informatica-ca665",
    storageBucket: "wolf-informatica-ca665.appspot.com",
    messagingSenderId: "234532959361",
    appId: "1:234532959361:web:e3ff96b80bd20286594980",
    measurementId: "G-VHZW7S48NQ"
  };
  
  


  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const fireStoreDb = getFirestore(app);

export default fireStoreDb;

// Obtengo todos los items de la DB

export async function getAllItems() {
    const miColec = collection(fireStoreDb,'items');
    const itemsSnapshot = await getDocs(miColec);
    console.log(itemsSnapshot.docs)
    return itemsSnapshot.docs.map(doc => {
        return {
        ...doc.data(),
        id: doc.id
        }
})};

export async function getItemsByCategory(categoryid){
    const miColec = collection(fireStoreDb,'items');
    const queryItem = query(miColec, where("category", '==', categoryid));
    const itemSnapshot = await getDocs(queryItem);

    return itemSnapshot.docs.map(doc => {
        return {
        ...doc.data(),
        id: doc.id
        }
    
})};

export async function getItem(id){
    const miColec = collection(fireStoreDb,'items');
    const itemRef = doc(miColec, id);
    const itemSnapshot = await getDoc(itemRef);

    
        return {
        ...itemSnapshot.data(),
        id: itemSnapshot.id
        }
    
};

export async function createBuyOrder(orderData){
    const buyTimeStamp = Timestamp.now();
    const orderWithDate = {
        ...orderData,
        date: buyTimeStamp
    };
    const miColec = collection(fireStoreDb,'buyOrders');
    const orderDoc = await addDoc(miColec, orderWithDate);
    console.log("Orden lista con el id ",orderDoc.id);
    return orderDoc.id;   
}