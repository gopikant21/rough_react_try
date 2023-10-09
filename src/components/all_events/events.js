import React from 'react';
import './events.css';

function Mtse() {
    return (
        <div>
            <h3>MTSE</h3>
            <img src={require("./images/ideation.png")} alt="MTSEimg"></img>
            <p>ydsbidshi sdbihdsu uudshuidsi
            </p>
        </div>
    );
}

function CodeMantra() {
    return (
        <div>
            <h3>Code Mantra</h3>
            <img src={require("./images/kavyakala.jpeg")} alt="MTSEimg"></img>
            <p>ydsbidshi sdbihdsu uudshuidsi
            </p>
        </div>
    );
}

export default function Events(){
    return (
        <div className="container">
            <h1>Our Events</h1>
            <br/>
            <div className="event-container">
                <Mtse/>
                <CodeMantra/>
            </div>
        </div>
    );
}