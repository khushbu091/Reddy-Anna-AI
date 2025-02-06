import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialShare from "./SocialShare";

const Layout = () => {
    const location = useLocation();
    const hideNavAndFooter = location.pathname === "/login" || location.pathname === "/admin" || location.pathname === "/cardForm"; 


    return (
        <>
            {!hideNavAndFooter && <Navbar />}
            {!hideNavAndFooter && <SocialShare />}
            <Outlet />
            {!hideNavAndFooter && <Footer />}
        </>
    );
}

export default Layout;
