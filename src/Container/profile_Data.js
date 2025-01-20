import React, { useState, useEffect } from "react";
import { ProfileCard } from '../frontend_components/Profilecard'
import { Map } from "../frontend_components/map_Components";
import './profile.css'
import profile_data from '../profile_data.json';

export const ProfileData = () => {
    const [profiles, setProfiles] = useState([]);
    const [selectedProfile, setSelectedProfile] = useState(null);

    const handleProfileClick = (profile) => {
        setSelectedProfile(profile);
    };

    useEffect(() => {
        setProfiles(profile_data); // assuming data is directly imported from a JSON file
    }, []);

    return (
        <div >
            <h2>Our users</h2>
        <div className="profile_container">
            
            <ul className="profile_list">
                {profiles.map((profile, index) => (
                    <li key={index}>
                        <button onClick={() => handleProfileClick(profile)}>
                            {profile.name}
                        </button>
                    </li>
                ))}
            </ul>
            {selectedProfile && (
                <div>
                    <ProfileCard 
                    name={selectedProfile.name}
                    photo={selectedProfile.photo}
                    description={selectedProfile.description}
                    location={selectedProfile.address}
                    
                     />
                    <Map addresses={[selectedProfile.address]} />
                </div>
            )}
        </div>
        </div>
    );
};

export const Property1 = () => {
    return (
        <>
            <div>
                <h2>Users</h2>
            </div>
            <div className="grid grid-three--cols">{
                profile_data.map((curElem) => {
                    return (
                        <Property2 key={curElem.id} curElem={curElem} />
                    )
                })}
            </div>
        </>
    );
}

export const Property2 = (props) => {
    console.log(props);
    const { id, name, photo, description } = props.curElem;

    return (
        <div className='list1'>
            <div>
                <img src={photo}
                    width="120px"
                    height="150px"
                    alt={`${name}'s photo`}
                />
            </div>
            <div id='card-content' style={{ overflow: 'auto', height: '170px' }}>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
           
        </div>
    );
}
