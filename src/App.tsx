// State mgmt
// import { useContext, useState } from "react";
// import { AuthContext, AuthProvider } from "./contexts/AuthContext";
// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Styling
import "./assets/styling/styles.scss";
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
  return (
    <RouterProvider router={router} />
    // <AuthProvider value={value}>
    // </AuthProvider>
  );
};

export default App;
