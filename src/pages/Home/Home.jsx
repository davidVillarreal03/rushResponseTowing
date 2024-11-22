import './Home.css'
export default function Home() {
    return (
        <div className='home'>
            <div className='promo'>
                <h2>Get a Free Tow!</h2>
                <p>Your next tow can be free when you repair your vehicle
                    at your closest <strong>Midas</strong>!<br></br>   
                     <em>
                     Only at participating locations.
                    </em>
                </p>
            </div>
            <img src='../../images/professiontowtruck.jpg' alt='Tow truck in action of taking tow vehicles away from accident.'/>
            <h1>FAST, RELIABLE TOWING SERVICES - ANYTIME, ANYWHERE!</h1>
            <p>24/7 Roadside Assistance to Get You Back on Track.</p>
            {/* <p>dhsdlfasd</p> */}
        </div>
    )
}