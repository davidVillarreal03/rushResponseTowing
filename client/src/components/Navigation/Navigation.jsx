import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <div className='container'>
            <ul className="nav nav-tabs">
                <img src="/images/towtruck.jpg" alt="Image of a tow truck driving away" />
                <li className="nav-item">
                    <Link
                        to="/"
                        className={currentPage === "/" ? "nav-link active" : "nav-link"}
                    >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/About"
                        className={currentPage === "/About" ? "nav-link active" : "nav-link"}
                    >
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/Services"
                        className={currentPage === "/Services" ? "nav-link active" : "nav-link"}
                    >
                        Services
                    </Link>
                </li>
                <li className="nav-item">
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