import { NavLink } from "react-router-dom";

import ButtonDiv from "../components/ButtonDiv";
// Ok so for some reason this throws a typescript error, check it later
// But the Button should be made into a reusable component

import logo from "../assets/images/logo.svg";
import notification_link from "../assets/images/notification_link.svg";

const TopNav = () => {
  const openModal = () => {
    // remove scroll from <body> tag
    // add event listener on the whole document to close modal
    // autofocus to the modal's title
  };

  const signIn = () => {
    //set state
  };

  return (
    <nav className='top-nav'>
      <NavLink to='/'>
        <img className='nav-logo' src={logo} alt='Helium home page' />
      </NavLink>

      <div className='nav-list'>
        <div className='button primary-button' onClick={openModal}>
          Sign In
        </div>
        <div className='button secondary-button icon-button'>
          <img src={notification_link} alt='Notifications' />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
