import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { UserContext } from "../containers/UserContext";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Feed from "./pages/Feed";
import ErrorPage from "./pages/ErrorPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* When route path and url location match, a match object is created */}
      {/* You can replace BrowserRouter with MemoryRouter for testing */}
      {/* <UserContext.Provider> */}
      <Layout>
        {/* Layout applies to every page EXCEPT a landing page, if you decide to make one.
        So keep Layout.tsx component separate for now */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* Do I need to make sure this patch is exact? In react-router v5 I had to */}
          <Route path='/post/:slug' element={<PostPage />} />

          {/* Update these components later */}
          <Route path='/tag/:tagName' element={<Feed />} />

          <Route path='/me' element={<HomePage />} />
          <Route path='/me/notifications' element={<HomePage />} />
          <Route path='/me/lists' element={<HomePage />} />
          <Route path='/me/posts/drafts' element={<HomePage />} />

          <Route path='/write' element={<HomePage />} />

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Layout>
      {/* </UserContext.Provider> */}
    </BrowserRouter>
  );
};

export default AppRouter;
