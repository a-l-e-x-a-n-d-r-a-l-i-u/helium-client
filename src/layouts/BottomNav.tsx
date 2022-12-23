import { NavLink } from "react-router-dom";
import home_link from "../assets/images/home_link.svg";
import home_active from "../assets/images/home_active.svg";
import lists_link from "../assets/images/lists_link.svg";
import lists_active from "../assets/images/lists_active.svg";
import search_link from "../assets/images/search_link.svg";
import search_active from "../assets/images/search_active.svg";

const BottomNav = () => {
  return (
    <nav className='bottom-nav'>
      <div className='nav-list'>
        <NavLink to='/'>
          {({ isActive }) => {
            return isActive ? <img src={home_active} alt='Home' /> : <img src={home_link} alt='Home' />;
          }}
        </NavLink>
        <NavLink to='/search'>
          {({ isActive }) => {
            return isActive ? <img src={search_active} alt='Search' /> : <img src={search_link} alt='Search' />;
          }}
        </NavLink>
        <NavLink to='/me/lists'>
          {({ isActive }) => {
            return isActive ? <img src={lists_active} alt='Lists' /> : <img src={lists_link} alt='Lists' />;
          }}
        </NavLink>
        <NavLink to='/me'>
          <img src={lists_link} alt='Profile' />
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
