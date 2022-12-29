import SecondaryNav from "../components/SecondaryNav";
import CardList from "../components/CardList";
import ProfilePage from "./ProfilePage";
import LoginModal from "./LoginModal";

const HomePage = () => {
  return (
    <div>
      {/* <p>Hello {context}</p> */}
      <SecondaryNav />
      <CardList />
    </div>
  );
};

export default HomePage;
