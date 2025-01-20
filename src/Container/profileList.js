import React from 'react';
import { ProfileCard } from '../frontend_components/Profilecard';
import { Map } from '../frontend_components/map_Components';

export const ProfileList = ({ profiles }) => {
  return (
    <div>
      <h1>Profile List</h1>
   
      <div className="profile-list">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            photo={profile.photo}
            description={profile.description}
          />
        ))}
      </div>
      <Map profiles={profiles} />
    </div>
  );
};