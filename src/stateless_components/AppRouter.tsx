import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} render={() => { return (HomePage) }} />
        {/* <Route path="/tag" component={TagPage} /> */}
        {/* <Route exact path="/compose/:templateKey" component={MessageComposerPage} />
        <Route exact path="/compose/new" component={WriteYourOwnPage} />
        <Route path="/signin" render={() => <SignIn />} />
        */}
        {/* <Route render={() => <HomePage notif="redirect" />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;