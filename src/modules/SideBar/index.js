import {Link, NavLink} from 'react-router-dom'
import faHome from 'react-fontawesome'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import homeLogo from "/Users/markjosephs/WebstormProjects/test2/src/25694.png"
import "./index.css"
const SideBar = () => {
    return (
        <nav className="nav-bar">
            <Link to={'/'}>
                <img src={homeLogo} className='icons' />
            </Link>

            <Link to={'/about'}>
                <img src={homeLogo} className='icons' />
            </Link>



        </nav>
    );
}

export default SideBar