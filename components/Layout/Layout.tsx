import NavBar from './Navigation/NavBar';
import SideNav from './Navigation/SideNav';

interface LayoutPropsTypes {}

const Layout: React.FC<LayoutPropsTypes> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <SideNav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
