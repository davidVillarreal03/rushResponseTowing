import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <div className="nav-container">
            <ul className="nav nav-tabs">
                <li className="nav-item" id='home'>
                    <Link
                        to="/"
                        className={currentPage === "/" ? "nav-link active" : "nav-link"}
                    >
                        Home
                    </Link>
                </li>
                <li className="nav-item" id='about'>
                    <Link
                        to="/About"
                        className={currentPage === "/About" ? "nav-link active" : "nav-link"}
                    >
                        About
                    </Link>
                </li>
                <li className="nav-item" id='services'>
                    <Link
                        to="/Services"
                        className={currentPage === "/Services" ? "nav-link active" : "nav-link"}
                    >
                        Services
                    </Link>
                </li>
                <li className="nav-item" id='contact'>
                    <Link
                        to="/Contact"
                        className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
        );
}

export default NavTabs;