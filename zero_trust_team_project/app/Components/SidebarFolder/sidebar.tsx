import React from "react";
import './sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h1 className="brand">Dronify</h1>
            <ul className="item-list">
                <li>Drones</li>
                <li>Info</li>
                <li>Class</li>
                <li>Info</li>
                <li>Location</li>
                <li>Track</li>
                <li>Info</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Sidebar;