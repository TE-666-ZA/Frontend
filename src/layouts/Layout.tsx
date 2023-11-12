import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./layoyt.module.css";
import Header from "../headerNavbar/Header";
import Navbar from "../headerNavbar/Navbar";
import Footer from "../footer/Footer";


const Layout: FC = () => {
  console.log("compilation done successful");
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;