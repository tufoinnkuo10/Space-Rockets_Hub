import React from 'react';

import { useSelector } from 'react-redux';
import ReservedMissions from './ReservedMissions';
import ReservedDragons from './ReservedDragons';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <>
      <div className="profile-container">
        <div className="missions">
          <ReservedMissions />
        </div>
        <div className="rockets">
          <h3 className="headname"> Rockets</h3>
          <div className="showrocket">
            {rockets.filter((item) => item.reserved).map((data) => (
              <li key={data.id} className="showrockets">
                {data.rocketName}
              </li>
            ))}
          </div>

        </div>
        <div className="dragons">
          <ReservedDragons />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
