import React from 'react';
import "./Nav.css";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar(props) {
    return (
        <>
            <ul className="customNavBar">
                <li className="navLink">
                    <Link
                        activeClass="active"
                        to="section4"
                        offset={-70}
                        duration={500}
                    >Resume</Link>
                </li>
                <li className="navLink">
                    <Link
                        activeClass="active"
                        to="section3"
                        offset={-70}
                        duration={500}
                    >Projects</Link>
                </li>
                <li className="navLink">
                    <Link
                        activeClass="active"
                        to="section2"
                        offset={-70}
                        duration={500}
                    >Work Experience</Link>
                </li>
                <li className="navLink">
                    <Link
                        activeClass="active"
                        to="section1"
                        offset={-250}
                        duration={500}
                    >About</Link>
                </li>
            </ul>
            <hr className="navline"/>
        </>
    );
};

export default NavBar;