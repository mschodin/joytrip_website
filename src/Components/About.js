import React from 'react';
import './About.css';

function About(props) {
    return (
        <>
            <div>
                <h1 className="about-header">About Me</h1>
                <div>
                    <div className="about-content">
                        <p>
                            Welcome to my personal website! I'm a detail oriented, self driven 
                            software engineer who loves learning.
                        </p>
                        <p>
                            Studying Computer Engineering at The University of Iowa gave me the tools
                            I needed to go off on my own and learn everything I can about the world of software.
                            I really enjoy learning languages and frameworks that I don't get to use on a daily 
                            basis, so I'm usually working on a project to hone my skills.
                        </p>
                        <p>
                            My career began at Collins Aerospace in 2019 in a full time co-op position. I worked
                            in a fast paced, agile environment writing verification tests in python to run in lab 
                            environments, then later moved onto writing code for the gateway application in java 
                            translating air-to-air and air-to-ground communications. After 2 1/2 years with Collins 
                            Aerospace I began working at TaxAct where I write code to modernize the Tax Pro desktop application.
                            We have remodeled user interfaces, moved build processes into automated pipelines, and updated
                            the framework that drives it all.
                            In January of 2022 I started working for OpComm Inc in my free time. This opportunity 
                            gives me the chance to learn the new cutting edge microsoft stack tools and begin
                            learning about software engineering in the medical field. 
                        </p>
                        <p>
                            When I'm not behind the computer you can find me playing music with my band, cooking, camping, and skiing.
                        </p>
                    </div>
                    <div className='about-photo'>
                        <img className='profile-photo' src={require('../Assets/MichaelSchodinPicture.jpg')} />    
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;