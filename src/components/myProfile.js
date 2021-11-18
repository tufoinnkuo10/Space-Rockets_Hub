import React from 'react';
import ReservedMissions from './ReservedMissions';

const MyProfile = () => (
  <div className="container">
    <div className="missions">
      <ReservedMissions />
    </div>
    <div className="rockets">
      <p>Rockets</p>
    </div>
    <div className="dragons">
      <p>Dragons</p>
    </div>
  </div>
);
export default MyProfile;
