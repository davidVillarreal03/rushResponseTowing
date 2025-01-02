import './Header.css';
import { Link, useLocation } from 'react-router-dom';
// import './Navigation.css';
function Header() {
    const currentPage = useLocation().pathname;
    // const menuBtn = document.getElementById("menu-btn");
    // const sideNav = document.getElementById("side-nav");
    // const handleClick = () => {
    //     menuBtn.classList.toggle('active');
    //     sideNav.classList.toggle('active');
    // }
    // const SlideInNavBar = () => {
    //     const [isOpen, setIsOpen] = useState(false);
    //     const toggleNav = () => {
    //         setIsOpen(!isOpen);
    //     }
    // };
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
                    <h2>RUSHING to HOOK YOU UP!</h2>
                    {/* <span>🚨</span> */}
                </div>
            </div>
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