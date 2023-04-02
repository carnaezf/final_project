import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};



export function AuthProvider({ children }){

    const [user, setUser] = useState(null)

    // const signUp = (email, password) => 
    // createUserWithEmailAndPassword(auth,email,password)
    const signUp = async (email, password, displayName) => {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);

        // acutaliza el display name
        await updateProfile(user, {
            displayName: displayName,
        });

        return user;
    }

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    // console.log("ya cargo")
    onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser)
      setUser(currentUser);
    });
  }, []);

  return (
    <authContext.Provider
      value={{ signUp, login, user, logout, loginWithGoogle }}
    >
      {children}
    </authContext.Provider>
  );
}

