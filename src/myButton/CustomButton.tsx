import React, {FC, useState} from 'react';
import styles from "./button.module.css";
import { useAppSelector } from "../app/hooks";

const CustomButton: FC<any> = ({ text, active = true, onClick }) =>{

const {nightMode} = useAppSelector(store => store.nightMode)


    return (
    <button
        className={`${styles.customButton} ${nightMode && styles.night}`}
        onClick={onClick}
    >{text}
    </button>
);
};
export default CustomButton;

