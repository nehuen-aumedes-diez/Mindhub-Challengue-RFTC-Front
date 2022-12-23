import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import './Layout.css'
import AutoToTop from "../components/Home1/AutoToTop";

function Layout(props) {
  return (
    <>
      <Navbar />
      <div className="content-layout">{props.children}</div>
      <Footer/>
      <AutoToTop/>
    </>
  );
}
export default Layout;
