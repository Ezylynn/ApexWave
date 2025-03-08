import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { getDoc, doc } from "firebase/firestore";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          let { displayName, email, uid, photoURL } = user;

          if (!displayName) {
            const userRef = doc(db, "users", uid);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
              const firestoreDisplayName = userSnap.data().displayName;

              // Chỉ cập nhật nếu giá trị từ Firestore khác với Authentication
              if (firestoreDisplayName && firestoreDisplayName !== displayName) {
                await updateProfile(auth.currentUser, { displayName: firestoreDisplayName });
                displayName = firestoreDisplayName;
              }
            }
          }

          setUser((prevUser) => {
            if (
              !prevUser ||
              prevUser.displayName !== displayName ||
              prevUser.email !== email ||
              prevUser.uid !== uid ||
              prevUser.photoURL !== photoURL
            ) {
              return { displayName, email, uid, photoURL };
            }
            return prevUser;
          });
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu người dùng:", error);
        }
      } else {
        setUser(null);
        if (window.location.pathname !== "/sign-up") {
          navigate("/sign-in");
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
