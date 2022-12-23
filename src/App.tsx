import { useContext } from "react";
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

// When route path and url location match, a match object is created
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
        element: <ComingSoon />,
      },
      {
        path: "*",
        element: <ErrorBoundary />,
      },
    ],
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
  return <RouterProvider router={router} />;
};

export default App;
