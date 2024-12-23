import './Home.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Home() {
    useEffect(() => {
        AOS.init();
    }, [])
    const responsiveSlider = () => {
        let slider = document.getElementById('slider');
        let sliderWidth = slider.offsetWidth;
        let slideList = document.getElementById('slideWrap');
        let count = 1;
        let items = slideList.querySelectorAll('li').length;
        let prev = document.getElementById('prev');
        let next = document.getElementById('next');

        window.addEventListener('resize', () => {
            sliderWidth = slider.offsetWidth;
        });

        let prevSlide = () => {
            if(count > 1) {
                count = count - 2;
                slideList.style.left = "-" + count * sliderWidth + "px";
                count ++;
            } else if (count = 1) {
                count = items - 1;
                slideList.style.left = "-" + count * sliderWidth + "px";
                count ++;
             }
            };

        let nextSlide = () => {
            if(count < items) {
                slideList.style.left = "-" + count * sliderWidth + "px";
                count ++;
            } else if (count = items) {
                slideList.style.left = "0px";
                count = 1;
            }
        };

        next.addEventListener('click', () => {
            nextSlide();
        });

        prev.addEventListener('click', () => {
            prevSlide();
        });

        setInterval(() => {
            nextSlide();
        }, 5000);
    }
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

                <section className='hero' data-aos="fade-up">
                    <div id="slider">
                        <ul id="slideWrap">
                            <li><img src='../../images/rrt1.png' alt='Image shows the company tow truck from the front of the driver side.'/></li>
                            <li><img src='../../images/rrt2.png' alt='Image shows the company tow truck from the front of the passenger side.'/></li>
                            <li><img src='../../images/rrt3.png' alt='Image shows the company tow truck from the back on the passenger side.'/></li>
                        </ul>
                            <a id="prev" onClick = {responsiveSlider}><i class="fa-solid fa-arrow-left"></i></a>
                            <a id="next" onClick = {responsiveSlider}><i class="fa-solid fa-arrow-right"></i></a>
                    </div>

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