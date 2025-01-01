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
                        <h1>FAST, RELIABLE TOWING SERVICES - ANYTIME, ANYWHERE!</h1>
                        <p>Stranded? Need help? Rush Response Towing is just a call away. Let us get you back on the road quickly and safely.</p>
                        <div className='mobile-phonePhrase'>
                            <p>Request assistance now by pressing the phone icon thats located on the bottom left of your screen!</p>
                        </div>
                    </div>
                </section>
                <div className='hero-page'>

                
                <section className='page-preview' data-aos="fade-up">
                <img className='hero-images' src='../../images/rrt1.png' alt='Image shows the company tow truck from the front of the driver side.'/>
                    <h2>Need to get to know us better?</h2>
                    <Link to='/about'>Learn more about our company</Link>
                </section>

                <section className='page-preview' data-aos="fade-up">
                <img className='hero-images' src='../../images/rrt2.png' alt='Image shows the company tow truck from the front of the passenger side.'/>
                    <h2>Ready to get started?</h2>
                    <Link to='/services'>View Our Services</Link>
                </section>

                <section className='page-preview' data-aos="fade-up">
                <img className='hero-images' src='../../images/rrt3.png' alt='Image shows the company tow truck from the back on the passenger side.'/>
                    <h2>Have a question or need help?</h2>
                    <Link to='/contact'>Contact Us Here</Link>
                </section>

                </div>
                <section className='page-preview' data-aos="fade-up">
                    <h2><Link to='/download'>Download Our App</Link></h2>
                    <div>
                        <p>Download our application so you have us on the go.
                            This will allow you to make your tow request from the comfort of your phone.</p>
                    </div>
                </section>
            </div>
    )
}