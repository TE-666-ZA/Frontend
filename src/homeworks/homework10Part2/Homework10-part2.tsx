import styles from './homework-page.module.css';
import React, {useState} from 'react';
import ThemeSwitcher from "../../main-page/themeSwitcher/ThemeSwitcher";




function Homework10Part2() {

    const [toggled, setToggled] = useState(true);
    const handleClick = (switchedValue: boolean) => {
        setToggled(switchedValue);
    }


    return (
        <div className={`${styles.container} ${!toggled && styles.night}`}>
            <header className={styles.header}>
                <h1>
                    <div className={styles.toggleDiv}>
                        <ThemeSwitcher onClick={handleClick} />
                    </div>
                    <span>Homework 10 Part 2</span>
                </h1>
            </header>
            <nav className={styles.navbar}>
                navigation
                coming soon
            </nav>

            <div>
                Here Will be posted homework10 part 2 javascript
            </div>

        </div>
    );
}

export default Homework10Part2;