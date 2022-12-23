import { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./assets/styling/styles.scss";
//import { UserContext } from "../containers/UserContext";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Feed from "./pages/Feed";
import ErrorBoundary from "./pages/ErrorBoundary";
import ComingSoon from "./pages/ComingSoon";

const App = () => {
  return (
    <div className='App'>
      <Layout>
        {/* <UserContext.Provider> */}
        {/* {location.state} */}
        {/* I wanna put location.state inside the HomePage component, do I need to pass it down as props or can I work some magic with Context API? */}
        {/* </UserContext.Provider> */}
      </Layout>
    </div>
  );
};

export default App;
