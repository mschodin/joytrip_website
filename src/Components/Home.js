import React from 'react';
import './Home.css';
import KOPB from '../Music/keep_on_passing_by_master.wav';

function Home(props) {
    return (
        <>
            <div className="name-container">
                <h1 className="name">Joytrip</h1>
            </div>
            <div>
                <p className="player-area">
                    <audio className="player" src={KOPB} controls />
                </p>
            </div>
        </>
    );
};

export default Home;