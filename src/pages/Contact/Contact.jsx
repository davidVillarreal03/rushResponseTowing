import './Contact.css'

export default function Contact() {
    return (
        <div>
            <section className='contact-page'>
                <div className='contact-header'>
                    <h1>Need Help Now? Contact Us! Available 24/7.</h1>
                    <p>We're here to help. Reach out to us anytime, and we'll respond promptly.</p>
                    <p>Office Hours:</p>
                    <p>Monday - Saturday: 8:00am - 6:00pm</p>
                    <p>Sunday: Closed</p>
                </div>

                <div className='contact-info'>

                    <div className='contact-item'>
                        <i className="fa-solid fa-map-marker-alt"></i>
                        <h3>Visit Us</h3>
                        <p>11219 West Ave San Antonio, TX 78213</p>
                        <div className='contact-map'>
                            <h2>Find Us Here</h2>
                            <a 
                            href="https://www.google.com/maps/place/11219+West+Ave,+San+Antonio,+TX+78213/@29.5420424,-98.5163594,14z/data=!4m5!3m4!1s0x865c6043ad7ed6fd:0x94635f052e3fa032!8m2!3d29.5420424!4d-98.5163594"
                            className='map-btn' target='_blank' rel='noopener'>
                                Get Directions
                            </a>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6942.237049462876!2d-98.51635942545182!3d29.542042442201293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c6043ad7ed6fd%3A0x94635f052e3fa032!2s11219%20West%20Ave%2C%20San%20Antonio%2C%20TX%2078213!5e0!3m2!1sen!2sus!4v1733088277850!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h1>Need a quote or schedule a tow? Get in touch!</h1>
                    <h1>Contact form</h1>
                    <form className="contact-form">
                        <label for="name">Name</label>
                        <input type='text' id='name' name="name" placeholder='Your full name' required></input>

                        <label for="email">Email</label>
                        <input type='email' id='email' name="email" placeholder='Email' required></input>
                        
                        <label for="phone">Phone</label>
                        <input type='tel' id='phone' name="phone" placeholder='Your Phone Number' required></input>

                        <label for="message">Message</label>
                        <textarea type='text' id='message' name="message" rows='5'placeholder='Type your message here...' required></textarea>
                      
                        <button type='submit' value="Submit">Send Message</button>
                    </form>
                </div>

            </section>
            

        </div>
    )
}