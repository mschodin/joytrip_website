import React from 'react';
import './Tour.css';

function Tour(props) {
    return (
        <>
            <div className="tour-content">
                <h2 className='tour-table-header'>See Joytrip Live</h2>
                <div className="tour-table">
                    <div className="tour-row-top">
                        <div className="tour-date">November 10, 2023 <a style={{fontStyle: "italic", marginRight: "4px"}}>at</a> Can Can Wonderland</div>
                        {/* <div className="tour-venue">Can Can Wonderland</div> */}
                        <div className="tour-location">St. Paul, MN</div>
                    </div>
                    <div className="tour-row-mid">
                        <div className="tour-date">November 18, 2023 <a style={{fontStyle: "italic", marginRight: "4px"}}>at</a> Octopus</div>
                        {/* <div className="tour-venue">Greenfield, IA</div> */}
                        <div className="tour-location">Greenfield, IA</div>
                    </div>
                    <div className="tour-row-mid">
                        <div className="tour-date">December 09, 2023 <a style={{fontStyle: "italic", marginRight: "4px"}}>at</a> WCCUnderground</div>
                        {/* <div className="tour-venue">Can Can Wonderland</div> */}
                        <div className="tour-location">Cedar Falls, IA</div>
                    </div>
                    <div className="tour-row-bottom">
                        <div className="tour-date">December 10, 2023 <a style={{fontStyle: "italic", marginRight: "4px"}}>at</a> The California Clipper</div>
                        {/* <div className="tour-venue">Can Can Wonderland</div> */}
                        <div className="tour-location">Chicago, IL</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tour;