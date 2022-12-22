import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className='side-bar'>
      <div>Sign in</div>
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
