import React from "react";
import TopNav from "./navigation/TopNav";
import BottomNav from "./navigation/BottomNav";
import SideNav from "./navigation/SideNav";

interface LayoutProps {
  // problem with JSX.Element is that it only allows for 1 child
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='large-screen-layout'>
      <SideNav />
      <div className='small-screen-layout'>
        <TopNav />
        <div id='main-content'>{children}</div>
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;
