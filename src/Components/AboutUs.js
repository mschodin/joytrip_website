import React from 'react';
import './AboutUs.css';
import SunrisePic from '../Assets/joytrip-sunrise-photo.jpeg';
import SunsetPic from '../Assets/joytrip-sunset-photo.jpeg';
import HorizontalDecal1 from '../Assets/horizontal-decal-1.png';

function AboutUs(props) {
    return (
        <>
            <div className="aboutus">
                <div className="aboutus-row">
                    <div className="aboutus-text-area">
                        <div className="aboutus-text m-right">Joytrip, an electric-indie-folk band creating vivid and honest music, Drawing from diverse musical backgrounds, Joytrip seeks to bring out the colorful and excitingly cool. Their debut EP, "Mr. Time and the Joyful Ploys," launched in summer 2023, preceding their first series of Midwest shows that fall. Thriving in live performances with lengthy sets, up to 3 hours, Joytrip's synergy shines when all members are actively engaged in moving and creating together.</div>
                    </div>
                    <div className="aboutus-picture-area">
                        <img src={SunrisePic} alt="Joytrip Sunrise" className="aboutus-picture" />
                    </div>
                </div>
                <img src={HorizontalDecal1} className='horizontal-decal-1' />
                <div className='aboutus-row'>
                    <div className="aboutus-picture-area">
                        <img src={SunsetPic} alt="Joytrip Sunset" className="aboutus-picture" />
                    </div>
                    <div className="aboutus-text-area m-left">
                        <div className="aboutus-text second-paragraph">The band is fully independent with members managing multiple roles. Michael Schodin handles guitar, vocals, and audio engineering; Eddie Hochman contributes guitar, trumpet, keyboards, and vocals. Bennett Shapiro on drums and harmonies, while Mitchell Wisniewski's bass unifies their sound. The band draws inspiration from past icons (Joni Mitchell, The Beatles) and modern artists (The 1975, John Mayer, Pinegrove), to shape their eclectic style. Joytrip wanders and will keep on passing by.</div>
                        {/* <div className="aboutus-text second-paragraph">The band operates independently, with each member handling multiple roles. Michael Schodin serves as guitarist, vocalist, and audio engineer, while Eddie Hochman contributes on guitar, trumpet, keyboards, and vocals. Bennett Shapiro drums and provides harmonies, while Mitchell Wisniewski's bass unifies their sound. They draw inspiration from past musical icons and contemporary artists to shape their eclectic style.</div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;