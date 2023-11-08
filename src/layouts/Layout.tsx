import {FC} from "react";
import {NavLink, Outlet} from "react-router-dom";
import styles from './layoyt.module.css'



const Layout: FC = () => {
    console.log('compilation done successful')
    return(
        <div className={styles.container} >
        <Outlet />
        </div>
    )
}

export default Layout;