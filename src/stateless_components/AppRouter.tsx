import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} render={() => { return (HomePage) }} />
        {/* <Route path="/tag" component={TagPage} /> */}
        {/* <Route exact path="/compose/:templateKey" component={MessageComposerPage} />
        <Route exact path="/compose/new" component={WriteYourOwnPage} />
        <Route path="/signin" render={() => <SignIn />} />
        */}
        {/* <Route render={() => <HomePage notif="redirect" />} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;