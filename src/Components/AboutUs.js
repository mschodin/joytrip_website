import React from 'react';
import './AboutUs.css';
import JoytripPic from '../Assets/vue-full-band.jpg';

function AboutUs(props) {
    return (
        <>
            <div className="aboutus">
                <div className="aboutus-text-area">
                    <div className="aboutus-text"><span className="bold">Joytrip</span> is an electric-folk indie band making music in Iowa City and beyond. Michael Schodin (vocals/guitar), Eddie Hochman (guitar/trumpet), Mitchell Wisniewski (bass), and Bennett Shapiro (drums) come together to make welcoming, honest, and colorful sounds that explore the experienced concurrence of our time.</div>
                    <div className="aboutus-text second-paragraph">Influenced by the modern and that which was once described as modern, Joytrip exudes elegance and groove. Overcoming and writing through pandemic era setbacks, Joytrip works hard to be stewards of a sound that holds authenticity and ingenuity dear.</div>
                </div>
                <div className="aboutus-picture-area">
                    <img src={JoytripPic} alt="Your Image" className="aboutus-picture"/>
                </div>
            </div>
        </>
    );
};

export default AboutUs;