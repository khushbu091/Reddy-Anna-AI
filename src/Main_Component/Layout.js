import {Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialShare from "./SocialShare";
const Layout = () => {
    
     return (
        <>
            <Navbar/>
            <SocialShare/>
            <Outlet />
            <Footer/>
            
           
        </>
    );
}
export default Layout;