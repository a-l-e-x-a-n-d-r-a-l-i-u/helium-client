import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  // problem with JSX.Element is that it only allows for 1 child
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      {/* <Header /> */}
      <div id="layout-container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
