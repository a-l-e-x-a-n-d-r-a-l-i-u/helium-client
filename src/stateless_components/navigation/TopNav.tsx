import React from "react";
import placeholderReactLogo from "../../images/logo192.png";

const TopNav = () => {
  return (
    <nav className='top-nav'>
      <img
        className='nav-logo'
        src={placeholderReactLogo}
        alt='placeholder logo'
      />
      <ul className='nav-list'>
        <li className='nav-option'>CTA button</li>
        <li className='nav-option'>notifs to right</li>
      </ul>
    </nav>
  );
};

export default TopNav;
