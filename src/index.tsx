import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styling/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Root layout
import Layout from "./layouts/Layout";
// Page imports
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Feed from "./pages/Feed";

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
        element: <Feed />,
      },
    ],
  },
]);

/* <Route path='/me' element={<ComingSoon />} />
<Route path='/me/notifications' element={<ComingSoon />} />
<Route path='/me/lists' element={<ComingSoon />} />
<Route path='/me/posts/drafts' element={<ComingSoon />} />
<Route path='/write' element={<ComingSoon />} />
<Route path='*' element={<ErrorBoundary />} /> */

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    {/* Strict mode doesn't impact build, it's just to check for unsafe lifecycles and unexpected side effects */}
    <RouterProvider router={router} />

    {/* <ThemeProvider theme={theme} > */}
    {/* Use ThemeProvider for Reset CSS or Global Styles */}
    {/* A Dark Mode Toggle with React and ThemeProvider */}
    {/* https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/ */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
