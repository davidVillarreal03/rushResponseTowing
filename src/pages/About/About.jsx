import './About.css'
import { Link } from 'react-router-dom'
export default function About() {
    return (
        <div>
            <section className='about-page'>
                <div className='about-header'>
                    <h1>Who We Are</h1>
                    <p>
                        At Rush Response Towing, we're more than just a towing company. We are a team of dedicated professionals committed to providing fast, reliable, and affordable roadside assistance to our community. Serving San Antonio, we take pride in being a trusted name for towing and vehicle recovery.
                    </p>
                </div>
                
                <div className='about-content'>
                    <div className='about-section'>
                        <h3>Our Mission</h3>
                        <p>
                            Our mission is simple: to get you back on the road safely and swiftly. We understand how stressful and inconvenient vehicle breakdowns can be, which is why we prioritize quick response times, excellent customer service, and affordable solutions for every situation.
                        </p>
                    </div>

                    <div className='about-section'>
                        <h3>What Sets Us Apart?</h3>
                        
                            <ul>
                                <li><i className='fa-solid fa-circle-check'></i><strong>Fast Response Times:</strong> When you call, we're ready. Our tow trucks are located to ensure minimal wait times.</li>
                                <li><i className='fa-solid fa-circle-check'></i><strong>24/7 Availability:</strong> No matter the time of day or night, we're here to help.</li>
                                <li><i className='fa-solid fa-circle-check'></i><strong>Skilled Professionals:</strong> Our team of licesned and trained drivers ensures your vehicle is handled with care.</li>
                                <li>See the services we provide here: <Link to="/Services">Services</Link></li>
                            </ul>
                        
                    </div>

                    <div className='about-section'>
                        <h3>Serving Our Community</h3>
                        <p>
                            As a locally owned business, we're proud to support the San Antonio community. Our customers aren't just clients -- they're our neighbors, friends, and family.
                        </p>
                    </div>

                    <div className='about-section'>
                        <h3>A Name You Can Trust</h3>
                        <p>
                            In the coming years, we're excited to expand our reach, expanding our services to include towing and vehicle recovery for a wider range of vehicles.
                            Checkout our reviews to see why you should trust Rush Response Towing: <Link to="/Reviews">Reviews</Link>
                        </p>
                    </div>

                    <div className='about-section'>
                        <h3>Contact Us Today!</h3>
                        <p>
                            Have a question? Need assistance? We're just a call away just press the phone icon below to contact us. At Rush Response Towing, we're always ready to help.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )
}