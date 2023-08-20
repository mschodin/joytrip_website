import React from 'react';
import './Tour.css';

function Tour(props) {
    return (
        <>
            <div className="tour-content">
                <h2>See Joytrip Live</h2>
                <div className="tour-table">
                    <div className="tour-row1">
                        <div className="tour-date">November 10, 2023</div>
                        <div className="tour-venue">Can Can Wonderland</div>
                        <div className="tour-location">St. Paul, MN</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tour;