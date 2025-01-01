import './Header.css';
import { Link, useLocation } from 'react-router-dom';
// import './Navigation.css';
function Header() {
    const currentPage = useLocation().pathname;
    const sideNav = document.getElementById("side-nav");
    const handleClick = () => {
        sideNav.classList.toggle('active');
    }
    return (
        
        <div className="header">
            <div className='logo-container'>
                <Link 
                    to="/" 
                    className={currentPage === "/" ? "nav-link active" : "nav-link"}
                >
                    <img className='logo' src='../../rrt.svg' alt='logo for the company Rush Response Towing.'/>
                </Link>
                <div className='rush-phrase'>
                    <h2>RUSHING to HOOK YOU UP!🚨</h2>
                </div>
            </div>
            <button id="menu-btn" class="menu-btn" onClick={handleClick}>☰ Menu</button>
            <nav id="side-nav" class="side-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="nav-container">
                        <ul className="nav nav-tabs">
                                <Link
                                    to="/"
                                    className={currentPage === "/" ? "nav-link active" : "nav-link"}
                                >
                            <li className="nav-item" id='home'>
                                    Home
                            </li>
                                </Link>
                                <Link
                                    to="/About"
                                    className={currentPage === "/About" ? "nav-link active" : "nav-link"}
                                >
                            <li className="nav-item" id='about'>
                                    About
                            </li>
                                </Link>
                                <Link
                                    to="/Services"
                                    className={currentPage === "/Services" ? "nav-link active" : "nav-link"}
                                >
                            <li className="nav-item" id='services'>
                                    Services
                            </li>
                                </Link>
                                <Link
                                    to="/Contact"
                                    className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
                                >
                            <li className="nav-item" id='contact'>
                                    Contact
                            </li>
                                </Link>
                        </ul>
                    </div>
        </div>
    )
}

export default Header;