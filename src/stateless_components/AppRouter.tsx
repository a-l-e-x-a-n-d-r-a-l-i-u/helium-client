import React from "react";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import Feed from "./Feed";
import ErrorPage from "./ErrorPage";

import Layout from "./Layout";

function AppRouter() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return (
    <BrowserRouter>
      {/* When route path and url location match, a match object is created */}
      {/* You can replace BrowserRouter with MemoryRouter for testing */}
      <Layout>
        {element}
        {/* <Routes>
          <Route path='/' element={<HomePage />} />
          {/* Do I need to make sure this patch is exact? In react-router v5 I had to
          <Route path='/post/:slug' element={<PostPage />} />

          {/* Update these components later
          <Route path='/signin' element={<HomePage />} />
          <Route path='/tag/:tagName' element={<Feed />} />

          <Route path='/me' element={<HomePage />} />
          <Route path='/me/notifications' element={<HomePage />} />
          <Route path='/me/lists' element={<HomePage />} />
          <Route path='/me/posts/drafts' element={<HomePage />} />

          <Route path='/write' element={<HomePage />} />

          <Route path='*' element={<ErrorPage />} />
        </Routes> */}
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;
