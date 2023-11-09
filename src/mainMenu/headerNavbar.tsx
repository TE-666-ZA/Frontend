import styles from './mainMenu.module.css';
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import CustomButton from "../customButton/CustomButton";
import { useAppSelector } from "../app/hooks";
import NavbarButton from "./navbarButton/NavbarButton";
import ScrollButton from "../scrollButton/scrollButton";
import ScrollToTop from "../scrollButton/scrollButton";




function HeaderNavbar() {


      const {nightMode} = useAppSelector(store => store.nightMode)


       return (
        <div className={`${styles.container} ${nightMode && styles.night}`}>
            <header id={'navbar'} className={styles.header}>
                <h1>
                    <div className={styles.toggleDiv}>
                       < ThemeSwitcher />
                    </div>
                    <span>DriftZone Hub</span>
                </h1>
            </header>
            <nav className={styles.navbar}>
              <NavLink to={'/'} > <NavbarButton text={'Home Page'}  /> </NavLink>
            </nav>
        </div>
    );
}

export default HeaderNavbar;