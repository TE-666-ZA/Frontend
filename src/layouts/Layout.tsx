import {FC} from "react";
import {NavLink, Outlet} from "react-router-dom";
import HomeworkPage from "../main-page/src/homework-page";
import exp from "constants";


const Layout: FC = () => {
    console.log('compilation done successful')
    return(
        <>
        <HomeworkPage />
            <Outlet />
        </>
    )
}

export default Layout;