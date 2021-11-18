import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <>
      <div className="profile-container">
        <div className="missions">
          <p>Missions</p>
        </div>
        <div className="rockets">
          <h3 className="rocketprofile"> Rockets</h3>
          <div className="showrocket">
            {rockets.filter((item) => item.reserved).map((data) => (
              <li key={data.id} className="showrockets">
                {data.rocketName}
              </li>
            ))}
          </div>

        </div>
        <div className="dragons">
          <p>Dragons</p>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
