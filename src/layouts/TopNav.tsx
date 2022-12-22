// State
import { useContext } from "react";
import { UserContext } from "../stateful_containers/UserContext";
// Reusable components -- ok for some reason ButtonDiv throws a typescript error, check it later
import ButtonDiv from "../components/ButtonDiv";
// Assets
import placeholderReactLogo from "../assets/images/logo192.png";
import notification_link from "../assets/images/notification_link.svg";

const TopNav = () => {
  const context = useContext(UserContext);
  const openModal = () => {
    alert("Open!");
    // remove scroll from <body> tag
    // add event listener on the whole document to close modal
    // autofocus to the modal's title
  };

  return (
    <nav className='top-nav'>
      <img className='nav-logo' src={placeholderReactLogo} alt='placeholder logo' />

      <div className='nav-list'>
        <div className='button primary-button' onClick={openModal}>
          {context.firstName ? `Hello, ${context.firstName}` : "Sign In"}
        </div>
        <div className='button secondary-button icon-button'>
          <img src={notification_link} alt='Notifications' />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
