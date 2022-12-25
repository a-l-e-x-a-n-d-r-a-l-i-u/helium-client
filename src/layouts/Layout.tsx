import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import SideNav from "./SideNav";

const Layout = () => {
  return (
    <div className='horizontal-layout'>
      <SideNav />
      <div className='vertical-layout'>
        <TopNav />
        <main>
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;
