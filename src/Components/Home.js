import React from 'react';
import './Home.css';
import '../index.css'

function Home(props) {
    return (
        <>
            <div className="name-container">
                <h1 className="name">Joytrip</h1>
            </div>
            <div>
                <p className="desc">
                    Software Engineer driven by learning the latest tools and technologies.
                </p>
            </div>
            <div>
                <a href="mailto:michael.schodin@gmail.com">
                    <img className="logo" src={require('../Assets/email.png')} />    
                </a>
                <a href="https://www.linkedin.com/in/mschodin">
                    <img className="logo" src={require('../Assets/linkedin.png')} /> 
                </a>
                <a href="https://www.github.com/mschodin">
                    <img className="logo" src={require('../Assets/GitHub-Mark-64px.png')} /> 
                </a>
            </div>
        </>
    );
};

export default Home;