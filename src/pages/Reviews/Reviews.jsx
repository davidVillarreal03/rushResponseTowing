import './Reviews.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { TextField, Button, Box, MenuItem, Slider, Typography } from '@mui/material';

export default function Reviews () {
    useEffect(() => {
            AOS.init();
        }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const rating = e.target.rating.value;
        const name = e.target.name.value;
        const review = e.target.review.value;
        
        console.log(`${rating}, ${name}, ${review}`);

    }
    return (
        <section className='reviewPage'>
            <div className="reviewHeader">
                <h1><strong>
                Don't Just Take Our Word, See What others have to say about us!
                </strong>
                </h1>
                <p>This page serves as our way to show potential clients why they should reach out for our services.</p>
            </div>
            <div className="reviews">
                <h3>Reviews from past customers shown here</h3>
            </div>
            <div className="addReview">
            <div className="contact-form-container">
                    <div data-aos="fade-right">
                        <h1>Want to add a review? Fill out the form below!</h1>
                    </div>
                    <form className="contact-form" data-aos="fade-down" onSubmit={(e) => handleSubmit(e)}>
                        <h3>Rate your experience:</h3>
                        <div className='rateBtn'>
                            
                            <input type='radio' id='star5' name='rating' value="5"></input>
                            <label for="star5" title="5 star"><i class="fa-solid fa-star"></i></label>

                            <input type='radio' id='star4' name='rating' value="4"></input>
                            <label for="star4" title="4 star"><i class="fa-solid fa-star"></i></label>

                            <input type='radio' id='star3' name='rating' value="3"></input>
                            <label for="star3" title="3 star"><i class="fa-solid fa-star"></i></label>

                            <input type='radio' id='star2' name='rating' value="2"></input>
                            <label for="star2" title="2 star"><i class="fa-solid fa-star"></i></label>

                            <input type='radio' id='star1' name='rating' value="1"></input>
                            <label for="star1" title="1 star"><i class="fa-solid fa-star"></i></label>

                        </div>

                        <label for="name">Name</label>
                        <input type='text' id='name' name="name" placeholder='Your full name' required></input>
                    
                        <label for="review">Review</label>
                        <textarea type='text' id='review' name="review" rows='5'placeholder='Tell us about your experience here...' required></textarea>
                      
                        <button type='submit' value="Submit">Submit Your Review!</button>
                    </form>
                </div>
            </div>
        </section>
    )
}