import React, { FC } from "react";
import styles from "./navbarButton.module.css";
import { useAppSelector } from "../../app/hooks";


const NavbarButton: FC<any> = ({ text, active = true, onClick }) => {

  const { nightMode } = useAppSelector(store => store.nightMode);


  return (
    <button
      className={`${styles.customButton} ${nightMode && styles.night}`}
      onClick={onClick}
    >{text}
    </button>
  );
};
export default NavbarButton;

