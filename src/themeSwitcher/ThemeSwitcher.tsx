import React, {useEffect, useState} from 'react';
import styles from './ThemeSwitcher.module.css';
import { useAppDispatch } from "../app/hooks";
import { toggleNight } from "../features/toggle/toggleSlice";

interface IThemeSwitcher {
    onClick: (value: boolean) => void;
}
    const ThemeSwitcher = ({onClick}: IThemeSwitcher): JSX.Element => {

        const dispatch = useAppDispatch()

            const [toggled, setToggled] = useState(() => {
                const savedTheme = localStorage.getItem('theme');
                return savedTheme ? JSON.parse(savedTheme) : false;
            }),

            handleSwitch = () => {
                setToggled((prevValue: boolean) => {
                    const newValue = !prevValue;
                    localStorage.setItem('theme', JSON.stringify(newValue));
                    onClick(newValue);
                    return newValue;
                });
                dispatch(toggleNight())
            };


            useEffect(() => {
                localStorage.setItem('theme', JSON.stringify(toggled));

                document.body.style.backgroundColor = toggled ? '#282c34' : 'white';
                document.body.style.color = toggled ? '#e7e5e5' : 'black';
            }, [toggled]);

        return (
            <div onClick={handleSwitch} className={`${styles.toggle} ${toggled && styles.night}`}>
                <div className={styles.sunMoon}>
                    <div className={styles.crater}/>
                    <div className={styles.crater}/>
                </div>
                <div>
                    <div className={`${styles.shape} ${styles.sm}`}/>
                    <div id='nightShape' className={`${styles.shape} ${styles.sm}`}/>
                    <div className={`${styles.shape} ${styles.sm}`}/>
                    <div className={`${styles.shape} ${styles.md}`}/>
                    <div className={`${styles.shape} ${styles.lg}`}/>
                </div>
            </div>
        )
    }
export default ThemeSwitcher