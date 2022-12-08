import React from "react";
import placeholderReactLogo from "../../images/logo192.png";

const SideNav = () => {
  return (
    <nav className='side-nav'>
      <img
        className='nav-logo'
        src={placeholderReactLogo}
        alt='placeholder logo'
      />
      <ul className='nav-list'>
        <li className='nav-option'>Home</li>
        <li className='nav-option'>Notifs</li>
        <li className='nav-option'>Lists</li>
        <li className='nav-option'>Posts</li>
        <br />
        <li className='nav-option'>Write</li>
      </ul>
      <img
        className='profile-thumbnail'
        src={placeholderReactLogo}
        alt='placeholder thumbnail'
      />
    </nav>
  );
};

export default SideNav;
