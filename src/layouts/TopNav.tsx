import React from "react";
import { Link } from "react-router-dom";

import placeholderReactLogo from "../assets/images/logo192.png";
import notification_link from "../assets/images/notification_link.svg";

const TopNav = () => {
  return (
    <nav className='top-nav'>
      <img className='nav-logo' src={placeholderReactLogo} alt='placeholder logo' />

      <div className='nav-list'>
        <Link to='/signin' replace>
          <div className='button primary-button'>Sign In</div>
        </Link>
        <Link to='/me/notifications'>
          <div className='button secondary-button icon-button'>
            <img src={notification_link} alt='Notifications' />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default TopNav;
