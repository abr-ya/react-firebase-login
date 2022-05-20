import { ReactElement } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../services/fire";

interface IAuthContextProvider {
  children: ReactElement;
}

interface IСreateUser {
  email: string;
  password: string;
}

const UserContext = createContext({});

export const AuthContextProvider = ({ children }: IAuthContextProvider) => {
  const [user, setUser] = useState({});

  const createUser = ({ email, password }: IСreateUser) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <UserContext.Provider value={{ createUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
