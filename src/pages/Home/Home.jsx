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

                <div className='promo'>
                    <h2>Get a Free Tow!</h2>
                    <p>Your next tow can be free when you repair your vehicle
                        at your closest <strong>Midas</strong>!<br></br>   
                         <em>
                         Only at participating locations.
                        </em>
                    </p>
                </div>

                <section className='hero'>
                    <img data-aos="fade-up"src='../../images/professiontowtruck.jpg' alt='Tow truck in action of taking tow vehicles away from accident.'/>
                    <div data-aos="fade-up" >
                        <h1>FAST, RELIABLE TOWING SERVICES - ANYTIME, ANYWHERE!</h1>
                        <p>Stranded? Need help? Rush Response Towing is just a call away. Let us get you back on the road quickly and safely.</p>
                        <p>Request assistance now by pressing the phone icon thats located on the bottom left of your screen!</p>
                    </div>
                </section>

                <section className='about-preview' data-aos="fade-up">
                    <h2>Need to get to know us better? Checkout our pages to learn more about us!</h2>
                    <Link to='/about'>About Us</Link>
                </section>

            </div>
    )
}