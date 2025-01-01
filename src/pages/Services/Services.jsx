import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Services() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='services-page' >
            <div className='forBackground'>

            <div className='promo'>
                    <h2>Get a Free Tow!</h2>
                    <p>Your next tow can be free when you repair your vehicle
                        at your closest <strong>Midas</strong>!<br></br>   
                         <em>
                         Only at participating locations.
                        </em>
                    </p>
                </div>
            <section className='service-header' data-aos="fade-up">
                <h1>Affordable Towing Services</h1>
                <p>
                    Fast, reliable, and professional towing services to get you and your vehicle to safety. Available 24/7!
                </p>
                <p className='pricing' data-aos="zoom-in">Towing services start at just <strong>$180</strong>.</p>
            </section>

            <section className='service-details'>
                <h2>What We Offer</h2>
                <ul>
                    <li data-aos="fade-right"><strong>Local Tows:</strong> Short-distance towing within San Antonio.</li>
                    <li data-aos="fade-right"><strong>Long-Distance Tows:</strong> Secure transport for vehicles over longer distances.</li>
                    <li data-aos="fade-right"><strong>Accident Recovery:</strong> Safe towing after a collision.</li>
                    <li data-aos="fade-right"><strong>Vehicle Relocation:</strong> Moving vehicles to dealerships, repair shops, or storage.</li>
                </ul>
                <p className='note'>*Pricing starts at $180, with additional costs for extended distances or special handling.</p>
            </section>

            <section className='faq'>
                <h2>Frequently Asked Questions</h2>
                <div className='question' data-aos="fade-left">
                    <p><strong>Q:</strong> How much does towing cost?</p>
                    <p><strong>A:</strong> Our towing service starts at $180. Final pricing depends on distance and vehicle type.</p>
                </div>
                <div className='question' data-aos="fade-right">
                    <p><strong>Q:</strong> How do I pay for the towing service?</p>
                    <p><strong>A:</strong> We accept cash, credit cards, and mobile payments.</p>
                </div>
                <div className='question' data-aos="fade-left">
                    <p><strong>Q:</strong> What areas do you serve?</p>
                    <p><strong>A:</strong> We proudly serve San Antonio.</p>
                </div>
                
            </section>
            </div>
            
        </div>
    )
}