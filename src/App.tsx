import { useContext } from "react";

// If I wanted state in a Higher Order Component
import { useState } from "react";

import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import "./assets/styling/styles.scss";
//import { UserContext } from "../containers/UserContext";

// Root layout
import Layout from "./layouts/Layout";
// Page imports
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import ErrorBoundary from "./pages/ErrorBoundary";
import ComingSoon from "./pages/ComingSoon";
import LoginModal from "./pages/LoginModal";
import ProfilePage from "./pages/ProfilePage";

// When route path and url location match, a match object is created
// You can also to sidebars or multiple routes with 'aside' in react-router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/post/:slug",
        element: <PostPage />,
      },
      {
        path: "/tag/:tagName",
        element: <ComingSoon />,
      },
      {
        path: "/me",
        element: <ProfilePage />,
      },
      {
        path: "*",
        element: <ErrorBoundary />,
      },
    ],
  },
  {
    path: "/signin",
    element: <LoginModal />,
  },
]);

/*
Links I copied from Medium.com:

<Route path='/me/notifications' element={<ComingSoon />} />
<Route path='/me/lists' element={<ComingSoon />} />
<Route path='/me/posts/drafts' element={<ComingSoon />} />
<Route path='/write' element={<ComingSoon />} />
*/

const App = () => {
  const [user, setUser] = useState<LoginProps | null>(null);
  const [showProfile, setShowProfile] = useState(false);

  return <RouterProvider router={router} />;
};

export default App;
