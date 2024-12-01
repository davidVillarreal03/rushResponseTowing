import './Footer.css'

export default function Footer() {
    return (
        <footer className='site-footer'>
            <div className='footer-container'>

                <div className='footer-about'>
                    <h3>About Rush Response Towing</h3>
                    <p> We're dedicated to providing fast, reliable towing and roadside assistance 24/7. Your safety is our priority!</p>
                </div>

                <div className='footer-links'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href = '#home'>Home</a></li>
                        <li><a href = '#services'>Services</a></li>
                        <li><a href = '#about'>About</a></li>
                        <li><a href = '#contact'>Contact</a></li>
                    </ul>
                </div>
                
                <div className='footer-contact'>
                    <h3>Need help or have a question?</h3>
                    <h3>Please contact us.</h3>
                    <p><i className="fa-solid fa-phone"></i><a href='tel:+210-954-9547'> +1 (210)954-9547</a></p>
                    <p><i className="fa-solid fa-envelope"></i><a href='mailto:rushresponsetowing@gmail.com'> rushresponsetowing@gmail.com</a></p>
                    <p><i className="fa-solid fa-map-marker-alt"></i> Serving San Antonio, TX and Nearby Areas</p>
        
                </div>
            </div>
                <div className='footer-bottom'>
                    <p>&copy; 2024 Rush Response Towing. All rights reserved.</p>
                </div>
        </footer>
    )
}