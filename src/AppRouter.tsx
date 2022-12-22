import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
//import { UserContext } from "../containers/UserContext";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Feed from "./pages/Feed";
import ErrorPage from "./pages/ErrorPage";
import ComingSoon from "./pages/ComingSoon";

const AppRouter = () => {
  const location = useLocation();

  return (
    <Layout>
      {/* <UserContext.Provider> */}
      {location.state}
      {/* Ok but I wanna put location.state inside the HomePage component, do I need to pass it down as props or can I work some magic with Context API? */}
      <Routes>
        {/* When route path and url location match, a match object is created */}
        <Route path='/' element={<HomePage />} />
        <Route path='/post' element={<PostPage />} />

        {/* Update these components later */}
        <Route path='/tag/:tagName' element={<Feed />} />
        <Route path='/me' element={<ComingSoon />} />
        <Route path='/me/notifications' element={<ComingSoon />} />
        <Route path='/me/lists' element={<ComingSoon />} />
        <Route path='/me/posts/drafts' element={<ComingSoon />} />
        <Route path='/write' element={<ComingSoon />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
      {/* </UserContext.Provider> */}
    </Layout>
  );
};

export default AppRouter;
