import React from 'react';
import './Home.css';
import KOPB from '../Music/keep_on_passing_by_master.wav';
import MrTimeArt from '../Assets/mr-time-art.jpg';

function Home(props) {
    return (
        <>
            {/* <div className="name-container">
                <h1 className="name">Joytrip</h1>
            </div>
            <div>
                <p className="player-area">
                    <audio className="player" src={KOPB} controls />
                </p>
            </div> */}
            <div className="home-content">
                <div className='home-column1'>
                    <img src={MrTimeArt} alt="Your Image" className="mrtime-picture"/>
                    <div className="album-title">Mr. Time and the Joyful Ploys</div>
                    <div className="out-now">NOW STREAMING</div>
                </div>
                <div className='home-column2'>
                    <iframe className='home-spotify-player' src="https://open.spotify.com/embed/album/626ZwDbfm8gDGOKSRM7B28?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </>
    );
};

export default Home;