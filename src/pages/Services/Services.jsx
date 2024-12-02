import './Services.css';
export default function Services() {
    return (
        <div className='services-page'>
            <div className='promo'>
                    <h2>Get a Free Tow!</h2>
                    <p>Your next tow can be free when you repair your vehicle
                        at your closest <strong>Midas</strong>!<br></br>   
                         <em>
                         Only at participating locations.
                        </em>
                    </p>
                </div>
            <section className='service-header'>
                <h1>Affordable Towing Services</h1>
                <p>
                    Fast, reliable, and professional towing services to get you and your vehicle to safety. Available 24/7!
                </p>
                <p className='pricing'>Towing services start at just <strong>$180</strong>.</p>
            </section>

            <section className='service-details'>
                <h2>What We Offer</h2>
                <ul>
                    <li><strong>Local Tows:</strong> Short-distance towing within San Antonio.</li>
                    <li><strong>Long-Distance Tows:</strong> Secure transport for vehicles over longer distances.</li>
                    <li><strong>Accident Recovery:</strong> Safe towing after a collision.</li>
                    <li><strong>Vehicle Relocation:</strong> Moving vehicles to dealerships, repair shops, or storage.</li>
                </ul>
                <p className='note'>*Pricing starts at $180, with additional costs for extended distances or special handling.</p>
            </section>

            <section className='faq'>
                <h2>Frequently Asked Questions</h2>
                <div className='question'>
                    <p><strong>Q:</strong> How much does towing cost?</p>
                    <p><strong>A:</strong> Our towing service starts at $180. Final pricing depends on distance and vehicle type.</p>
                </div>
                <div className='question'>
                    <p><strong>Q:</strong> How do I pay for the towing service?</p>
                    <p><strong>A:</strong> We accept cash, credit cards, and mobile payments.</p>
                </div>
                <div className='question'>
                    <p><strong>Q:</strong> What areas do you serve?</p>
                    <p><strong>A:</strong> We proudly serve San Antonio.</p>
                </div>
                
            </section>
            
        </div>
    )
}