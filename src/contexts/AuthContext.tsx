<<<<<<< Updated upstream
import { createContext, useState } from "react";
=======
import { createContext, ReactNode, useState } from "react";
>>>>>>> Stashed changes

// Difference between type and interface is interfaces are an extension
// Oh wait actually there's more to it than that
// https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c

type authContextType = {
<<<<<<< Updated upstream
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  username?: string;
  password?: string;
};

// AuthContext default values

// AuthContext
export const AuthContext = createContext<authContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  username: undefined,
  password: undefined,
});

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
=======
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
>>>>>>> Stashed changes
};
