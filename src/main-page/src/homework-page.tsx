import styles from './homework-page.module.css';
import React, {useState} from 'react';
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import {NavLink} from "react-router-dom";



function HomeworkPage() {

    const [toggled, setToggled] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });
        const handleClick = (switchedValue: boolean) => {
        setToggled(switchedValue);
    }


    return (
        <div className={`${styles.container} ${toggled && styles.night}`}>
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
                <NavLink to={'homework10'} > homework10 </NavLink>
            </div>
        </div>
    );
}

export default HomeworkPage;