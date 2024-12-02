import './Home.css'
export default function Home() {
    return (
        <div className='home-page'>

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
                    <img src='../../images/professiontowtruck.jpg' alt='Tow truck in action of taking tow vehicles away from accident.'/>
                    <h1>FAST, RELIABLE TOWING SERVICES - ANYTIME, ANYWHERE!</h1>
                    <p>Stranded? Need help? Rush Response Towing is just a call away. Let us get you back on the road quickly and safely.</p>
                    <p>Request assistance now by pressing the phone icon thats located on the bottom left of your screen!</p>
                </section>

                <section className='about-preview'>
                    <h2>Need to get to know us better? Checkout our pages to learn more about us!</h2>
                    <a href='#about'><strong>About Us</strong></a>
                </section>

            </div>
    )
}