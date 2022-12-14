// AppRouter
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
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
      {/* Replace BrowserRouter with MemoryRouter for testing */}
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/post' element={<PostPage />} />
          <Route path='/post/:slug' element={<PostPage />} />
          <Route path='*' element={<ErrorPage />} />
          {/* <Route path="/tag" component={TagPage} /> */}
          {/* <Route exact path="/compose/:templateKey" component={MessageComposerPage} />
        <Route exact path="/compose/new" component={WriteYourOwnPage} />
        <Route path="/signin" render={() => <SignIn />} />
        */}
          {/* <Route render={() => <HomePage notif="redirect" />} /> */}

          {/* tbh should use Link in navbar so that pages don't reload like an anchor in html */}
          {/* when route path and url location match, a match object is created */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
