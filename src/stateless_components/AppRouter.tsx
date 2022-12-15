// AppRouter
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import Feed from "./Feed";
import ErrorPage from "./ErrorPage";

// Layout
import TopNav from "./navigation/TopNav";
import BottomNav from "./navigation/BottomNav";
import SideNav from "./navigation/SideNav";

// Layout code

interface LayoutProps {
  // problem with JSX.Element is that it only allows for 1 child
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='horizontal-layout'>
      <SideNav />
      <div className='vertical-layout'>
        <TopNav />
        <div id='main-content'>{children}</div>
        <BottomNav />
      </div>
    </div>
  );
};

// AppRouter code
const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* When route path and url location match, a match object is created */}
      {/* You can replace BrowserRouter with MemoryRouter for testing */}
      <Layout>
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
    </BrowserRouter>
  );
};

export default AppRouter;
