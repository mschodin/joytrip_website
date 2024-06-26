import React from 'react';
import './Tour.css';

function Tour(props) {
    let gigs = [
        {
            date: "July 7, 2024",
            time: "8:00 PM",
            venue: "Gabes",
            city: "Iowa City, IA"
        },
        {
            date: "August 22, 2024",
            time: "5:00 - 7:00 PM",
            venue: "420 Linden St",
            city: "East Lansing, MI"
        },
        {
            date: "August 24, 2024",
            time: "TBA",
            venue: "Cobra Lounge",
            city: "Chicago, IL"
        }
        ];

    let gigsContent = [];

    for (let i = 0; i < gigs.length; i++) {
        let rowClassName = "";
        if (i == 0) {
            rowClassName = "tour-row-top";
        } else if (i == gigs.length - 1) {
            rowClassName = "tour-row-bottom";
        } else {
            rowClassName = "tour-row-mid";
        }

        gigsContent.push(
            <div className={rowClassName}>
                <div className="tour-date">{gigs[i].date} <a className="tour-at">at</a> {gigs[i].venue} <a className="tour-time">{gigs[i].time}</a></div>
                <div className="tour-location">{gigs[i].city}</div>
            </div>
        );
    }

    return (
        <>
            <div className="tour-content">
                <h2 className='tour-table-header'>See Joytrip Live</h2>
                <div className="tour-table">
                    {gigsContent}
                </div>
            </div>
        </>
    );
};

export default Tour;