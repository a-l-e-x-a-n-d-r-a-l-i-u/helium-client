import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import SideNav from "./SideNav";

interface LayoutProps {
  // problem with JSX.Element is that it only allows for 1 child
  children?: React.ReactNode;
}
// You can just replace children with <Outlet /> imported from react-router-dom

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='horizontal-layout'>
      <SideNav />
      <div className='vertical-layout'>
        <TopNav />
        <div id='main-content'>{children}</div>
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;
