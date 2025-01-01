import './Home.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Home() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='home-page' >

                <div className='promo' >
                    <a href='tel:210-954-9547'>
                    <h2>Get a Free Tow!</h2>
                    <p>Your next tow can be free when you repair your vehicle
                        at your closest <strong>Midas</strong>!<br></br>   
                         <em>
                         Only at participating locations.
                        </em>
                    </p>

                    </a>
                </div>

                <section className='hero'>

                    <div data-aos="fade-up" className='hero-text' >
                    <div className='hero-images' data-aos="fade-up">
                         <ul>
                            <li><img src='../../images/rrt1.png' alt='Image shows the company tow truck from the front of the driver side.'/></li>
                            <li><img src='../../images/rrt2.png' alt='Image shows the company tow truck from the front of the passenger side.'/></li>
                            <li><img src='../../images/rrt3.png' alt='Image shows the company tow truck from the back on the passenger side.'/></li>
                        </ul>
                    </div>
                        <h1>FAST, RELIABLE TOWING SERVICES - ANYTIME, ANYWHERE!</h1>
                        <p>Stranded? Need help? Rush Response Towing is just a call away. Let us get you back on the road quickly and safely.</p>
                        <div className='mobile-phonePhrase'>
                            <p>Request assistance now by pressing the phone icon thats located on the bottom left of your screen!</p>
                        </div>
                    </div>
                </section>

                <section className='about-preview' data-aos="fade-up">
                    <h2>Need to get to know us better? Checkout our pages to learn more about us!</h2>
                    <Link to='/about'>About Us</Link>
                </section>

            </div>
    )
}