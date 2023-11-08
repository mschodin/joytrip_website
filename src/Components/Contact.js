import React, { useEffect } from 'react';
import './Contact.css';
import EmailIcon from '../Assets/icons8-email.svg';

function Contact(props) {
    return (
        <>
            <div className="resume-container">
                <iframe id="sign-up-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfZjWpxqX5ksVijad-HR7K9JrOZvr8fmCPAuAL7EGV_y9DIsg/viewform?embedded=true" 
                        width="640" height="511" frameBorder="0" marginHeight="0" marginWidth="0" scrolling='no' className='contact-form'>Loading…</iframe>
                <div className='email-area'>
                    <div className='email-text-area'>
                        <div>
                            <div className='email-header'>Contact us directly at:</div>
                            <div className='email-addr'>joytriptheband@gmail.com</div>
                        </div>
                        <a className="contact-social-icon" href="mailto:joytriptheband@gmail.com" target="_blank">
                            <img src={EmailIcon} className='icon'/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;