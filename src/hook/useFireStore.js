import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

export const useFireStore = (collectionName, condition) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Kiểm tra nếu condition hoặc compareValue không hợp lệ thì không làm gì
    if (!condition || !condition.compareValue) {
      setDocuments([]);
      return;
    }

    let queryCollection = query(collection(db, collectionName));

    if (condition) {
      queryCollection = query(
        collection(db, collectionName),
        where(condition.name, condition.operator, condition.compareValue),
      );
    }

    const unsub = onSnapshot(queryCollection, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDocuments(data);
    });

    return () => unsub();
  }, [
    collectionName,
    condition?.name,
    condition?.operator,
    condition?.compareValue,
  ]);

  return documents;
};
