import React from 'react';
import './Home.css';
import KOPB from '../Music/keep_on_passing_by_master.wav';
import MrTimeArt from '../Assets/mr-time-art.jpg';
import LetMeLayArt from '../Assets/let-me-lay-art.jpg';
import OhNoArt from '../Assets/Oh No Cover Art.jpg';
import SlushArt from '../Assets/Slush Cover.jpg';
import SpotifyIcon from '../Assets/icons8-spotify.svg';
import InstagramIcon from '../Assets/icons8-instagram.svg';
import TiktokIcon from '../Assets/icons8-tiktok.svg';
import YoutubeIcon from '../Assets/icons8-youtube.svg';
import AppleMusicIcon from '../Assets/icons8-apple-music.svg';
import EmailIcon from '../Assets/icons8-email.svg';

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
                    <img src={SlushArt} alt="Your Image" className="mrtime-picture"/>
                    <div className="album-title">Slush</div>
                    <div className="out-now">OUT NOW</div>
                </div>
                <div className='home-column2'>
                    <iframe className='home-spotify-player' src="https://open.spotify.com/embed/track/7kAgZexm0chUR6NIO58aFc?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <div className="socials">
                        <a className="social-icon" href="https://open.spotify.com/artist/2SYn55YfIWrAereupJ7KVt?si=u7fY4EIvSmKJZYX6KdE5Mw" target="_blank">
                            <img src={SpotifyIcon} />
                        </a>
                        <a className="social-icon" href="mailto:joytriptheband@gmail.com" target="_blank">
                            <img src={EmailIcon} />
                        </a>
                        <a className="social-icon" href="https://www.instagram.com/joytripband/" target="_blank">
                            <img src={InstagramIcon} />
                        </a>
                        <a className="social-icon" href="https://www.tiktok.com/@joytripband" target="_blank">
                            <img src={TiktokIcon} />
                        </a>
                        <a className="social-icon" href="https://www.youtube.com/@JoytripBand" target="_blank">
                            <img src={YoutubeIcon} />
                        </a>
                        <a className="social-icon" href="https://music.apple.com/us/artist/joytrip/1689805192"target="_blank">
                            <img src={AppleMusicIcon} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;