import { createContext } from "react";

const UserContext = createContext<UserContextValue>({});
const UserDispatchContext = createContext({});

interface UserContextValue {
  username?: string;
  firstName?: string;
  lastName?: string;
}

export { UserContext, UserDispatchContext };
