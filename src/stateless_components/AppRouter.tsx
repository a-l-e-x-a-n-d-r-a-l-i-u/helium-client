import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PostPage from "./PostPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />
        {/* <Route path="/tag" component={TagPage} /> */}
        {/* <Route exact path="/compose/:templateKey" component={MessageComposerPage} />
        <Route exact path="/compose/new" component={WriteYourOwnPage} />
        <Route path="/signin" render={() => <SignIn />} />
        */}
        {/* <Route render={() => <HomePage notif="redirect" />} /> */}

            {/* tbh should use Link in navbar so that pages don't reload like an anchor in html */}
    {/* when route path and url location match, a match object is created */}

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;