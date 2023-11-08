import React from 'react';
import './Content.css';

function Content(props) {
    return (
        <>
            {/* <h1 className="content-header">Live from Lauderdale Lakes</h1> */}
            <div className="video-area">
                <div className="video-responsive">
                    <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/3YwJliPGS30?si=ZYD3hEKrchT-lJSo`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
            </div>
            <div className='lauderdale-desc-area'>
                <div className='lauderdale-desc-header'>Live from Lauderdale Lakes</div>
                <div className="lauderdale-desc-text">
                Joytrip's <a style={{fontStyle: 'italic'}}>Live from Lauderdale Lakes</a> was recorded in southern Wisconsin in September 2023. These songs were crafted as the band navigated the global pandemic, geopolitical turmoil, young marriage, greed, and a world in flux. <a style={{fontStyle: 'italic'}}>Live from Lauderdale Lakes</a> is abundant with tasty grooves, tight instrumentation, and stunning harmonies. Stripped down to guitars, bass, vocals, and drums, this project showcases Joytrip's musical essence in its purest form. Across five original tracks, Michael Schodin, Mitchell Wisniewski, Bennett Shapiro, and Eddie Hochman united with the aim of creating authentically. Drawing heavy inspiration from live productions such as Pinegrove’s 'Amperland, NY,' Joytrip recognized that music made collaboratively, in a single take within a room, captures sound in one of the most genuine ways. <a style={{fontStyle: 'italic'}}>Live from Lauderdale Lakes</a> complements picnics, morning coffee, transitioning seasons, and gentle smiles. As always, please be kind. A heartfelt thank you extends to Ethan Herman and Erik Anderson for their exceptional partnership throughout the process.
                </div>
            </div>
        </>
    );
};

export default Content;