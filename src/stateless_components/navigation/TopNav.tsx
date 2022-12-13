import React from "react";
import { Link } from "react-router-dom";

import placeholderReactLogo from "../../images/logo192.png";
import lists_link from "../../images/lists_link.svg";

const TopNav = () => {
  return (
    <nav className='top-nav'>
      <img className='nav-logo' src={placeholderReactLogo} alt='placeholder logo' />

      <div className='nav-list'>
        <Link to='/login'>CTA Button</Link>
        <Link to='/me/notifications'>
          <img src={lists_link} alt='Notifications' />
        </Link>
      </div>
    </nav>
  );
};

export default TopNav;
