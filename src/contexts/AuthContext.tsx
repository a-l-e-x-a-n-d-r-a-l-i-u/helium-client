import { createContext, ReactNode, useState } from "react";

// Difference between type and interface is interfaces are an extension
// Oh wait actually there's more to it than that
// https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c

type authContextType = {
  user: boolean;
  login: () => void;
  logout: () => void;
};

// AuthContext
const authContextDefaultValues: authContextType = {
  user: false,
  login: () => {},
  logout: () => {},
};

type authProviderProps = {
  children: ReactNode;
};
// AuthProvider function
export const AuthProvider = ({ children }: authProviderProps) => {
  const [user, setUser] = useState<boolean>(null);
  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };

  return <AuthContext.Provider value={(user, login, logout)}>{children}</AuthContext.Provider>;
};

// AuthContext
const authContextDefaultValues: authContextType = {
  user: false,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<authContextType>(authContextDefaultValues);

type authProviderProps = {
  children: ReactNode;
};
// AuthProvider function
export const AuthProvider = ({ children }: authProviderProps) => {
  const [user, setUser] = useState<boolean>(false);
  const login = () => {
    setUser(true);
  };
  const logout = () => {
    setUser(false);
  };

  return <AuthContext.Provider value={(user, login, logout)}>{children}</AuthContext.Provider>;
};
