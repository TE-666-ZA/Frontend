import styles from "./headerNavbar.module.css";
import React from "react";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import { useAppSelector } from "../app/hooks";



function Header() {


  const { nightMode } = useAppSelector(store => store.nightMode);


  return (
    <div className={`${styles.container} ${nightMode && styles.night}`}>
      <header id={"navbar"} className={styles.header}>
        <h1>
          <span>DriftZone Hub</span>
        </h1>
      </header>
    </div>
  );
}

export default Header;