import {FC} from "react";
import {Outlet} from "react-router-dom";


const Layout: FC = () => {
    console.log('compilation done successful')
    return(
        <>
        <header />

            <Outlet />
        </>
    )
}

export default Layout;