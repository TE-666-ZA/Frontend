import styles from "./footer.module.css";
import React from "react";
import { useAppSelector } from "../app/hooks";


function Footer() {


  const { nightMode } = useAppSelector(store => store.nightMode);


  return (
    <div className={`${styles.footer} ${nightMode && styles.night}`}>

      <div className={styles.thinLine} />



    </div>
  );
}

export default Footer;