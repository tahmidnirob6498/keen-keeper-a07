import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const RootLayout = () => {
    return (
        <div>
          <Navbar/> 
          <div className="max-w-4/5 mx-auto">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default RootLayout;