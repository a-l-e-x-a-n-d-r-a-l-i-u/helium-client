import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className='side-bar'>
      <Link to='/signin' data-toggle='modal' data-target='#myModal' replace>
        <div className='button primary-button'>Sign In</div>
      </Link>
      <div>Search bar</div>
      <div>
        <p>Trending</p>
        <a>See full list</a>
      </div>
      <div>
        <h3>Writing on Medium</h3>
      </div>
    </nav>
  );
};

export default SideBar;
