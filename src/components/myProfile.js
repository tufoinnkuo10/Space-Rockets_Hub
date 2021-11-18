import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  return (

  <div className="profile-container">
    <div className="missions">
      <p>Missions</p>
    </div>
    
    <div className="rockets">
        <h2>My Rockets</h2>
        <div className="display_rocket">
          {rockets.filter((item) => item.reserved).map((data) => (
            <li key={data.id} className="display_list_r">
              {data.rocketName}
            </li>
          ))}
        </div>

      </div>
    </div>
  )}
    <div className="dragons">
      <p>Dragons</p>
    </div>
  </div >
);
export default MyProfile;
