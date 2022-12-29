import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
// Components
import SecondaryNav from "../components/SecondaryNav";
import CardList from "../components/CardList";
// Plsying with context
import ProfilePage from "./ProfilePage";
import LoginModal from "./LoginModal";

const HomePage = () => {
  const { user, login, logout } = useContext(AuthContext);
  return (
    <div>
      <p>Hello {user}!</p>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <SecondaryNav />
      <CardList />
    </div>
  );
};

export default HomePage;
