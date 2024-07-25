import React from 'react';
import './Tour.css';

function Tour(props) {
    let gigs = [
        {
            date: "August 22, 2024",
            time: "5:00 - 7:00 PM",
            venue: "420 Linden St",
            city: "East Lansing, MI"
        },
        {
            date: "August 24, 2024",
            time: "7:00 PM Doors",
            venue: "Cobra Lounge",
            city: "Chicago, IL",
            ticket: "https://dice.fm/partner/dice/event/l88bqb-marvin-stumbles-mangoland-joytrip-big-fans-24th-aug-cobra-lounge-chicago-tickets?dice_id=3565462&dice_channel=web&dice_tags=organic&dice_campaign=DICE&dice_feature=mio_marketing"
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