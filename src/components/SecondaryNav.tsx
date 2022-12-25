import { NavLink } from "react-router-dom";

const SecondaryNav = () => {
  return (
    <div id='feed-nav'>
      <NavLink to='/recommendations'>
        <div className='tab symbol'>+</div>
      </NavLink>

      <NavLink to='/'>
        {({ isActive }) => {
          return isActive ? <div className='tab selected'>For you</div> : <div className='tab'>For you</div>;
        }}
      </NavLink>

      <NavLink to='/?feed=following&source=home'>
        <div className='tab'>Following</div>
      </NavLink>
    </div>
  );
};

export default SecondaryNav;
