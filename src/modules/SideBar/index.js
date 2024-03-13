import {Link, NavLink} from 'react-router-dom'
import homeLogo from "/Users/19784/projects/react-demo/src/25694.png"
import "./index.css"
const SideBar = () => {
    return (
        <nav className="nav-bar">
            <Link className="link" to={'/'}>
                <img src={homeLogo} className='icons' />
            </Link>
        </nav>
    );
}

export default SideBar