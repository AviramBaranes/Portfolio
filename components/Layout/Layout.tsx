import NavBar from './Navigation/NavBar';

interface LayoutPropsTypes {}

const Layout: React.FC<LayoutPropsTypes> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
