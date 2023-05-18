import React from 'react';
import './Experience.css';

function Experience(props) {
    return (
        <>
            <div className="workexp">
                <h1 className="exp-header">Experience</h1>
                <hr/>
                <div id="taxactexp" className='job'>
                    <h1>TaxAct</h1>
                    <p>
                        Software Engineer
                    </p>
                    <ul>
                        <li>
                            Write modern, scalable, robust code for the Tax Pro product to develop new features
                            desired by tax professionals and modernize the desktop application
                        </li>
                        <li>
                            Upgraded .Net framework and depreciated packages to improve security and performance in
                            over 14 projects including desktop software, internal API's, and internal tools
                        </li>
                        <li>
                            Collaborate with a multi-disciplinary team of engineers, UI/UX designers, tax professionals,
                            and product owners to build new features for the desktop application
                        </li>
                    </ul>
                </div>
                <div id="opcommexp" className='job'>
                    <h1>OpComm Inc</h1>
                    <p>
                        Software Engineer
                    </p>
                    <ul>
                        <li>
                            Created and upgraded 22 reports & analytics to be dynamic, clear, and fast to break down
                            and visualize surgical data using Blazor, Syncfusion, and .NET 6
                        </li>
                        <li>
                            Implemented control interface to filter and compare datasets to identify patterns
                        </li>
                    </ul>
                </div>
                <div id="collinsexp" className='job'>
                    <h1>Collins Aerospace</h1>
                    <p>
                        Software Engineer Co-op
                    </p>
                    <ul>
                        <li>
                            Developed structures and interfaces to translate messages for facilitation of air-to-ground
                            and air-to-air communication on the TCTS II Program
                        </li>
                        <li>
                            Restructured verification test suite to be fast, thorough, and consistent in the CI/CD process
                        </li>
                        <li>
                            Installed software in lab environments and collaborated with multiple teams to test
                            software integration in a deployment environment
                        </li>
                    </ul>
                </div>
                <div id="uiowaexp" className='job'>
                    <h1>University of Iowa</h1>
                    <p>
                        Teaching Assistant
                    </p>
                    <ul>
                        <li>
                            Led office hours teaching internet protocols, network architectures, and packet transport
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Experience;