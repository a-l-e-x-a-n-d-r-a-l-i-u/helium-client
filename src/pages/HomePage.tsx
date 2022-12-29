import { useContext } from "react";
import { UserContext } from "../stateful_containers/UserContext";
import SecondaryNav from "../components/SecondaryNav";
import CardList from "../components/CardList";

const HomePage = () => {
  // const context = useContext(UserContext);
  return (
    <div>
      {/* <p>Hello {context}</p> */}
      <SecondaryNav />
      <CardList />
    </div>
  );
};

export default HomePage;
