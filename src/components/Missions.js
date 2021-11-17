import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/missions/missions';
// import { fetchData } from '../Redux/missions/missions';

const displayItem = (missionTab) => {
  const { missions } = missionTab;
  const tab = [];
  for (let i = 0; i < missions.length; i += 1) {
    tab.push(
      <tr key={i}>
        <td>
          {missions[i].mission_name}
        </td>
        <td>
          { missions[i].description }
        </td>
        <td>
          <span className="badge">Not a member</span>
        </td>
        <td>
          <button className="btn" id={missions[i].mission_id} type="button">Join Mission</button>
        </td>
      </tr>,
    );
  }
  return (tab);
};
const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const missions = useSelector((state) => state.missions);
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {displayItem(missions)}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
