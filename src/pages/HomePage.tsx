import { useContext } from "react";
import Feed from "./Feed";

//import { UserContext } from "../containers/UserContext";

const HomePage = () => {
  //  const context = useContext(UserContext);
  return (
    <>
      {/* <p>Hello {context}</p> */}
      <Feed />
    </>
  );
};

export default HomePage;
