import React, {FC, useState} from 'react';
import styles from "./button.module.css";

const CustomButton: FC<any> = ({ text, active = true, onClick }) =>{

const [toggled, setToggled] = useState (() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : false;
});

    return (
    <button
        className={`${styles.customButton} ${toggled && styles.night}`}
        onClick={onClick}
    >{text}
    </button>
);
};
export default CustomButton;

