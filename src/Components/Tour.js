import React from 'react';
import './Tour.css';

function Tour(props) {
    return (
        <>
            <div className="tour-content">
                <h2 className='tour-table-header'>See Joytrip Live</h2>
                <div className="tour-table">
                    <div className="tour-row-top">
                        <div className="tour-date">March 30, 2024 <a style={{fontStyle: "italic", marginRight: "4px", fontSize: "1rem"}}>at</a> Spinal Tap</div>
                        <div className="tour-location">Cedar Rapids, IA</div>
                    </div>
                    <div className="tour-row-mid">
                        <div className="tour-date">April 28, 2024 <a style={{fontStyle: "italic", marginRight: "4px", fontSize: "1rem"}}>at</a> Old Railroad Pub <a style={{fontStyle: "italic", fontWeight: "bold", fontSize:".8rem", marginRight: "4px"}}>5:00-8:00 PM</a></div>
                        <div className="tour-location">Cedar Rapids, IA</div>
                    </div>
                    <div className="tour-row-mid">
                        <div className="tour-date">May 17, 2024 <a style={{fontStyle: "italic", marginRight: "4px", fontSize: "1rem"}}>at</a> Jobsite <a style={{fontStyle: "italic", fontWeight: "bold", fontSize:".8rem", marginRight: "4px"}}>7:00-10:00 PM</a></div>
                        <div className="tour-location">Iowa City, IA</div>
                    </div>
                    <div className="tour-row-mid">
                        <div className="tour-date">May 24, 2024 <a style={{fontStyle: "italic", marginRight: "4px", fontSize: "1rem"}}>at</a> KRFC Radiol <a style={{fontStyle: "italic", fontWeight: "bold", fontSize:".8rem", marginRight: "4px"}}>1:40-2:00 PM</a></div>
                        <div className="tour-location">Ft. Collins, CO</div>
                    </div>
                    <div className="tour-row-mid">
                        <div className="tour-date">May 24, 2024 <a style={{fontStyle: "italic", marginRight: "4px", fontSize: "1rem"}}>at</a> Little Bear Saloon</div>
                        <div className="tour-location">Evergreen, CO</div>
                    </div>
                    <div className="tour-row-mid">
                        <div className="tour-date">May 25, 2024 <a style={{fontStyle: "italic", marginRight: "4px", fontSize: "1rem"}}>at</a> Trident Cafe <a style={{fontStyle: "italic", fontWeight: "bold", fontSize:".8rem", marginRight: "4px"}}>4:00-6:00 PM</a></div>
                        <div className="tour-location">Boulder, CO</div>
                    </div>
                    <div className="tour-row-mid">
                        <div className="tour-date">May 25, 2024 <a style={{fontStyle: "italic", marginRight: "4px", fontSize: "1rem"}}>at</a> Golden Moon Speakeasy <a style={{fontStyle: "italic", fontWeight: "bold", fontSize:".8rem", marginRight: "4px"}}>8:00-11:00 PM</a></div>
                        <div className="tour-location">Golden, CO</div>
                    </div>
                    <div className="tour-row-bottom">
                        <div className="tour-date">May 26, 2024 <a style={{fontStyle: "italic", marginRight: "4px", fontSize: "1rem"}}>at</a> East Fax Tap <a style={{fontStyle: "italic", fontWeight: "bold", fontSize:".8rem", marginRight: "4px"}}>8:00-10:00 PM</a></div>
                        <div className="tour-location">Denver, CO</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tour;