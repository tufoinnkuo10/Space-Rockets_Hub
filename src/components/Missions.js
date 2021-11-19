import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, reserved } from '../Redux/missions/missions';

const displayItem = (missionTab, dispatch) => {
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
        <td className="text-center">
          <span className={missions[i].reserved ? 'badge-active' : 'badge-unenable'}>{missions[i].reserved ? 'Active Member' : 'Not A MEMBER'}</span>
        </td>
        <td className="text-center">
          <button
            className={missions[i].reserved ? 'btn btn-red' : 'btn btn-gray'}
            onClick={() => dispatch(reserved(missions[i].mission_id))}
            id={missions[i].mission_id}
            type="button"
            name={i}
          >
            {missions[i].reserved ? 'Leave Mission' : 'Join Mission'}
          </button>
        </td>
      </tr>,
    );
  }
  return (tab);
};
const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.missions.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch]);
  return (
    <div>
      <table className="table-missions">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th className="min-width">Status</th>
            <th className="min-width">Action</th>
          </tr>
        </thead>
        <tbody>
          {displayItem(missions, dispatch)}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
