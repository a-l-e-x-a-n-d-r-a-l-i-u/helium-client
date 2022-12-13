import React from "react";
import { Link } from "react-router-dom";

import home_link from "../../images/home_link.svg";
import home_active from "../../images/home_active.svg";
import lists_link from "../../images/lists_link.svg";
import lists_active from "../../images/lists_active.svg";
import search_link from "../../images/search_link.svg";
import search_active from "../../images/search_active.svg";

const BottomNav = () => {
  return (
    <nav className='bottom-nav'>
      <div className='nav-list'>
        <Link to='/'>
          <img src={home_link} alt='Home' />
        </Link>
        <Link to='/search'>
          <img src={search_link} alt='Search' />
        </Link>
        <Link to='/me/lists'>
          <img src={lists_link} alt='Lists' />
        </Link>
        <Link to='/me/posts/drafts'>
          <img src={lists_link} alt='Profile' />
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
