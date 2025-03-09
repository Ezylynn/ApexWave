import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export const addDocument = async (collectionName, data) => {
  try {
    //phuong thuc them ban ghi vao collection

    // Hàm Collection(kết nối db, tên collection)
    const document = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", document.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
