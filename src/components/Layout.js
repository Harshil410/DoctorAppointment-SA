import { Outlet, Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";


function Layout(){return (
    <div class="main-wrapper">
        <Header />

        <Outlet/>

        <Footer />
  </div>
);}

export default Layout;