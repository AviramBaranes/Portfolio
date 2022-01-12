import NavBar from './Navigation/NavBar';
import SideNav from './Navigation/SideNav';

import classes from '../../styles/Layout/Layout.module.scss';

interface LayoutPropsTypes {}

const Layout: React.FC<LayoutPropsTypes> = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <NavBar />
      <SideNav />
      <main className={classes.Main}>{children}</main>
    </div>
  );
};

export default Layout;
