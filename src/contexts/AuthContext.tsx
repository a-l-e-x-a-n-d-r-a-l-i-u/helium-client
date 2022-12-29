import { createContext, useState } from "react";

// Difference between type and interface is interfaces are an extension
// Oh wait actually there's more to it than that
// https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c

type authContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  username?: string;
  password?: string;
};

// AuthContext
const authContextDefaultValues: authContextType = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  username: undefined,
  password: undefined,
};

export const AuthContext = createContext<authContextType>(authContextDefaultValues);

// AuthProvider function
export const AuthProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return <AuthContext.Provider value={(isLoggedIn, setLoggedIn, username)}>{children}</AuthContext.Provider>;
};
