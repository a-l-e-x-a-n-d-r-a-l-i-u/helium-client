import React, { createContext, useState } from "react";

// UserContext: to query the context state
const UserContext = createContext<string | null>({});
// UserDispatchContext: to mutate the context state
const UserDispatchContext = createContext<string | null>({});

function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    username: "Jane Smith",
  });

  return <UserContext.Provider value={userDetails}></UserContext.Provider>;
}

export { UserProvider, UserContext, UserDispatchContext };
