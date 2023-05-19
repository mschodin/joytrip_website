import React from 'react';
import './Content.css';

function Content(props) {
    return (
        <>
            <h1 className="content-header">Watch</h1>
            <div className="video-area">
                <div className="video-responsive">
                    <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/o8diLnOTmsU`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
            </div>
        </>
    );
};

export default Content;