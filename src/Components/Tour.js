import React from 'react';
import './Tour.css';

function Tour(props) {
    let gigs = [
        {
            date: "January 30, 2025",
            time: "6:00 PM",
            venue: "Raccoon Motel",
            city: "Davenport, IA",
            ticket: "https://dice.fm/event/q2ky3o-calculated-wnobletiger-joytrip-baron-von-future-30th-jan-raccoon-motel-davenport-tickets?pid=9fd8409a&_branch_match_id=1401648931666472303&utm_medium=partners_api&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1U9NSjU1SkkxTLQwSrUvyEyxtUxLsTAxsExUqytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAfZ8ZFkgAAAA%3D"
        },
        {
            date: "February 21, 2025",
            time: "",
            venue: "Underground Lounge",
            city: "Chicago, IL"
        },
        {
            date: "April 4, 2025",
            time: "",
            venue: "Cafe Mustache",
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