import React from "react";
import { placeholderLogo } from "../../public/logo192.png";

const Header = () => {
  return (
    <nav className='top-nav'>
      <img src={placeholderLogo} alt='placeholder logo' />
      <ul className='nav-list'>
        <li className='nav-option'>CTA button</li>
        <li className='nav-option'>notifs to right</li>
      </ul>
    </nav>
  );
};

export default Header;
