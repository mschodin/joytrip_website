import React from 'react';
import './Projects.css';

function Projects(props) {
    return (
        <>
            <div className="projectsexp">
                <h1 className="proj-header">Projects</h1>
                <hr/>
                <div id="grapevinesexp" className='proj'>
                    <div className="pic-area">
                        <img className="proj-pic" src={require('../Assets/grapevinesSite.png')}/>
                    </div>
                    <div className="desc-area-right">
                        <h1>The Grapevines SPA Website</h1>
                        <p>
                            Built with: React, Express - Deployed on AWS
                        </p>
                        <p>
                            I built The Grapevines SPA website at the start of 2020, right before the outbreak of Covid-19 in the USA.
                            My band, The Grapevines, had just finished a tour through the state of California. To publicize our music
                            I created a modern single page application to give fans a way to connect with the band, find our music, 
                            and learn about upcoming shows.
                        </p>
                    </div>
                </div>
                <div id="uvcexp" className='proj'>
                    <div className="desc-area-left">
                        <h1>UVC Covid-19 Disinfection Device</h1>
                        <p>
                            Built with: React-Native, C++, Arduino - Deployed to Google Play Store
                        </p>
                        <p>
                            The UVC Covid-19 Disinfection Device was my senior design project at The University of Iowa. This project
                            was a great response to an ongoing pandemic that allowed us to create a userful device while researching 
                            the capabilities of Ultraviolet-C (UVC) light. We built an array of UVC LEDs that were driven by an
                            Arduino, which was controlled by an Android app. When a user starts a cleaning cycle position sensors 
                            detect the distance of the surface to be sanitized, and calculate the duration required to eliminate the 
                            Covid-19 virus on the surface. 
                        </p>
                    </div>
                    <div className="pic-area">
                        <img className="proj-pic" src={require('../Assets/uvcexp.png')}/>
                    </div>
                </div>
                <div id="valorantexp" className='proj'>
                    <div className="pic-area">
                        <img className="proj-pic" src={require('../Assets/valorantexp.png')}/>
                    </div>
                    <div className="desc-area-right">
                        <h1>Valorant Scrim Scheduler App</h1>
                        <p>
                            Built with: Ruby, Rails, React, sqlite3, Webpack - Deployed on Heroku
                        </p>
                        <p>
                            The Valorant scrim scheduler web app is a project in progress that I've been working on.
                            It allows users to create an account, customize their profile, track their tournament
                            history, create teams, and schedule scrimmages against other teams using the app (many features
                            are still in progress).
                        </p>
                    </div>
                </div>
                <div id="maskexp" className='proj'>
                    <div className="desc-area-left">
                        <h1>Mask Detection and Temperature Reader</h1>
                        <p>
                            Built with: Node.js, Firebase, Raspberry Pi, TensorFlow
                        </p>
                        <p>
                            The Mask Detection and Temperature Reader was built in the course Internet of Things 
                            at The University of Iowa. This project was another response to the ongoing pandemic.
                            We used a raspberry pi to drive a camera, temperature reading module, and a script that 
                            would detect movement within human temperature ranges, then used machine learning libraries
                            to determine if the person is wearing a mask. It would also verify that the persons temperature
                            is under 100 degrees farenheit. The device would proceed by illuminating the green LED if the
                            person is clear to enter, and illuminate the red LED if they either didn't have a mask, or had 
                            fever.
                        </p>
                    </div>
                    <div className="pic-area">
                        <img className="proj-pic" src={require('../Assets/maskexp.png')}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;