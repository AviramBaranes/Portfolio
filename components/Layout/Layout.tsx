import Head from 'next/head';

import NavBar from './Navigation/NavBar';
import SideNav from './Navigation/SideNav';

interface LayoutPropsTypes {}

const Layout: React.FC<LayoutPropsTypes> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>{"Aviram's Portfolio"}</title>
        <link rel='icon' href='Me/app-icon.png' />
      </Head>
      <NavBar />
      <SideNav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
