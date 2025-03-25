import React from 'react';
import './Tour.css';

function Tour(props) {
    let gigs = [
        {
            date: "April 4, 2025",
            time: "7:00-9:00pm",
            venue: "Cafe Mustache",
            city: "Chicago, IL"
        },
        {
            date: "April 5, 2025",
            time: "8:00-9:30pm",
            venue: "Elray's Live and Dive",
            city: "Iowa City, IA"
        },
        {
            date: "May 23, 2025",
            time: "8:00-11:15pm",
            venue: "Little Bear Saloon",
            city: "Evergreen, CO"
        },
        {
            date: "May 24, 2025",
            time: "9:00am-12:00pm",
            venue: "City Park Farmers Market",
            city: "Denver, CO"
        },
        {
            date: "May 24, 2025",
            time: "6:00-8:00pm",
            venue: "Spirit Hounds",
            city: "Lyons, CO"
        },
        {
            date: "May 25, 2025",
            time: "7:30pm",
            venue: "Skylark Lounge",
            city: "Denver, CO"
        },
        {
            date: "August 8, 2025",
            time: "",
            venue: "Rock the Chalk",
            city: "Iowa City, IA"
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

        if (gigs[i].ticket) {
            gigsContent.push(
                <div className={rowClassName}>
                    <div className="tour-date">{gigs[i].date} <a className="tour-at">at</a> {gigs[i].venue} <a className="tour-time">{gigs[i].time}</a></div>
                    <a href={gigs[i].ticket} target="_blank" class="ticket-button">Tickets</a>
                    <div className="tour-location">{gigs[i].city}</div>
                </div>
            );
        } else {
            gigsContent.push(
                <div className={rowClassName}>
                    <div className="tour-date">{gigs[i].date} <a className="tour-at">at</a> {gigs[i].venue} <a className="tour-time">{gigs[i].time}</a></div>
                    <div className="tour-location">{gigs[i].city}</div>
                </div>
            );
        }
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