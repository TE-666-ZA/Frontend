import React, {FC} from 'react';
import Button from '@mui/material/Button';
import styles from "./button.module.css";

const CustomButton: FC<any> = ({ text, active = true, onClick }) => (
    <button
        className={styles.customButton}
        onClick={onClick}
    >{text}
    </button>
);
export default CustomButton;
