import React from "react";
import { Link } from "react-router-dom"
import homeImage from "../assets/evening.jpg"


export default function Home() {
    return (
        <div className="home-container">
            <img src={homeImage} alt="Softly lit evening bar" className="home-image" />
            <h1>Evening events at Dana Cafe</h1>
            <Link to="events">Events</Link>
        </div>
    )
};

