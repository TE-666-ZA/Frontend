import styles from "./headerNavbar.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import NavbarButton from "./navbarButton/NavbarButton";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";


function Navbar() {


  const { nightMode } = useAppSelector(store => store.nightMode);


  return (
    <div className={`${styles.container} ${nightMode && styles.night}`}>
<div className={styles.toggleDiv} >
      <ThemeSwitcher />
</div>

      <nav className={styles.navbar}>
        <NavLink to={"/"}> <NavbarButton text={"Home Page"} /> </NavLink>
        <NavLink to={"topCars"}> <NavbarButton text={"Best drift cars"} /> </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;