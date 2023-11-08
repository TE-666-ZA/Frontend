import styles from './mainMenu.module.css';
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import CustomButton from "../myButton/CustomButton";
import { useAppSelector } from "../app/hooks";




function MainMenu() {


      const {nightMode} = useAppSelector(store => store.nightMode)

        const handleClick = () => {

  }


    return (
        <div className={`${styles.container} ${nightMode && styles.night}`}>
            <header className={styles.header}>
                <h1>
                    <div className={styles.toggleDiv}>
                       < ThemeSwitcher onClick={handleClick} />
                    </div>
                    <span>Homework page</span>
                </h1>
            </header>
            <nav className={styles.navbar}>
              navigation

            </nav>

            <div>

                <NavLink to={'/'} > <CustomButton text={'Main Page'}  /> </ NavLink>
                <NavLink to={'homework10'} > <CustomButton text={'Homework 10 part 2'} /> </NavLink>
            </div>
        </div>
    );
}

export default MainMenu;