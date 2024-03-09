import {Link, NavLink} from 'react-router-dom'
import faHome from 'react-fontawesome'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import homeLogo from "/Users/markjosephs/WebstormProjects/test2/src/25694.png"
import "./index.css"
const SideBar = () => {
    return (
        <nav className="nav-bar">
            <div className="center">

                <Link className="home-link" to={'/'}>
                    <p className='home-text-overlay'>HOME</p>
                    <img src={homeLogo} className='icons' />
                </Link>

                <Link className="about-link" to={'/about'}>
                    <h1>ABOUT</h1>
                </Link>

            </div>
        </nav>
    );
}

export default SideBar