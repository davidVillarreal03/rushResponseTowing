// import { Link, useLocation } from 'react-router-dom';
// import './Navigation.css';

// function NavTabs() {
//     const currentPage = useLocation().pathname;

//     return (
//         <div className="nav-container">
//             <ul className="nav nav-tabs">
//                     <Link
//                         to="/"
//                         className={currentPage === "/" ? "nav-link active" : "nav-link"}
//                     >
//                 <li className="nav-item" id='home'>
//                         Home
//                 </li>
//                     </Link>
//                     <Link
//                         to="/About"
//                         className={currentPage === "/About" ? "nav-link active" : "nav-link"}
//                     >
//                 <li className="nav-item" id='about'>
//                         About
//                 </li>
//                     </Link>
//                     <Link
//                         to="/Services"
//                         className={currentPage === "/Services" ? "nav-link active" : "nav-link"}
//                     >
//                 <li className="nav-item" id='services'>
//                         Services
//                 </li>
//                     </Link>
//                     <Link
//                         to="/Contact"
//                         className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
//                     >
//                 <li className="nav-item" id='contact'>
//                         Contact
//                 </li>
//                     </Link>
//             </ul>
//         </div>
//         );
// }

// export default NavTabs;