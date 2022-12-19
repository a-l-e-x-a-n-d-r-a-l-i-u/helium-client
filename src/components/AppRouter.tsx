import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "../UserContext";

import Layout from "./Layout";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import Feed from "./Feed";
import ErrorPage from "./ErrorPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* When route path and url location match, a match object is created */}
      {/* You can replace BrowserRouter with MemoryRouter for testing */}
      <UserProvider>
        <Layout>
          {/* Layout applies to every page EXCEPT a landing page, if you decide to make one.
        So keep Layout.tsx component separate for now */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            {/* Do I need to make sure this patch is exact? In react-router v5 I had to */}
            <Route path='/post/:slug' element={<PostPage />} />

            {/* Update these components later */}
            <Route path='/signin' element={<HomePage />} />
            <Route path='/tag/:tagName' element={<Feed />} />

            <Route path='/me' element={<HomePage />} />
            <Route path='/me/notifications' element={<HomePage />} />
            <Route path='/me/lists' element={<HomePage />} />
            <Route path='/me/posts/drafts' element={<HomePage />} />

            <Route path='/write' element={<HomePage />} />

            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Layout>
      </UserProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
