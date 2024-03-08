import Sidebar from "../SideBar"
import "./index.css"
import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <div className="page">
            <Sidebar />
            <Outlet />
            <h1 className="logo">LOGO HERE</h1>
        </div>
);
}

export default Layout