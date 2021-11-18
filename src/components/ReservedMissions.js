import React from 'react';
import { useSelector } from 'react-redux';

const displayfilteredMissions = (missionTab = []) => {
  const { missions } = missionTab;
  const filteredMissions = missions.filter((mission) => mission.reserved === true);
  const tab = [];
  for (let i = 0; i < filteredMissions.length; i += 1) {
    tab.push(
      <tr key={i}>
        <td>{filteredMissions[i].mission_name}</td>
      </tr>,
    );
  }
  return (tab);
};
export default function ReservedMissions() {
  const missions = useSelector((state) => state.missions);
  return (
    <table id="missions">
      <caption>My Missions</caption>
      <tbody>
        { displayfilteredMissions(missions)}
      </tbody>
    </table>
  );
}
