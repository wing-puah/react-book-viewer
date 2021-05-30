import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="d-flex">{children}</div>
    </div>
  );
};

export default Layout;
