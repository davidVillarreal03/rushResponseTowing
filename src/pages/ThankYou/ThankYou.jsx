import './ThankYou.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
const ThankYou = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='thankyou-page'>
            <h1>Thank You!</h1>
            <p>Thank you for your message. We will get back to you as soon as possible.</p>
            <div className='return-home'>
                <Link to='/'>Return Home</Link> 
            </div>
        </div>

    )
}

export default ThankYou;