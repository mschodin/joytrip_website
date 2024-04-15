import React from 'react';
import './Tour.css';

function Tour(props) {
    let gigs = [
        {
            date: "April 28, 2024",
            time: "5:00-8:00 PM",
            venue: "Old Railroad Pub",
            city: "Cedar Rapids, IA"
        },
        {
            date: "May 17, 2024",
            time: "7:00-10:00 PM",
            venue: "The Jobsite",
            city: "Iowa City, IA"
        },
        {
            date: "May 24, 2024",
            time: "1:40-2:00 PM",
            venue: "KRFC Radio",
            city: "Ft. Collins, CO"
        },
        {
            date: "May 24, 2024",
            time: "",
            venue: "Little Bear Saloon",
            city: "Evergreen, CO"
        },
        {
            date: "May 25, 2024",
            time: "8:00-11:00 PM",
            venue: "Golden Moon Speakeasy",
            city: "Golden, CO"
        },
        {
            date: "May 26, 2024",
            time: "8:00-10:00 PM",
            venue: "East Fax Tap",
            city: "Denver, CO"
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