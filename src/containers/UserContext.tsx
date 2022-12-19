import React, { createContext, useState } from "react";

// UserContext: to query the context state
const UserContext = createContext<UserContextValue>({});
// UserDispatchContext: to mutate the context state
// const UserDispatchContext = createContext<UserContextValue>({});

interface UserContextValue {
  username?: string;
}

function UserProvider({}) {
  const [userDetails, setUserDetails] = useState({
    username: "Jane Smith",
  });

  return <UserContext.Provider value={userDetails}></UserContext.Provider>;
}

export { UserProvider, UserContext };
