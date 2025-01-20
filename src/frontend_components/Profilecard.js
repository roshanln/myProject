import React, {useState} from "react";
import '../Container/profile.css'

import {Map} from "../frontend_components/map_Components";

export const ProfileCard = ({ name, photo, description, location }) => {

    const [showMap, setShowMap] = useState(false);

    const handleClick = () => {
    setShowMap(true);
    };

    return (
        <div className="profile">
            <img src={photo} alt={`${name}'s Profile`} />
            <h2>{name}</h2>
            <p>{description}</p>
            <button onClick={handleClick}>View Map</button>
            {showMap && <Map location={location} />}
        </div>
    );
};