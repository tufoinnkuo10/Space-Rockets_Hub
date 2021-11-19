import React from 'react';
import { useSelector } from 'react-redux';

const displayfilteredDragons = (dragonTab = []) => {
  const { dragons } = dragonTab;
  const filteredDragons = dragons.filter((dragon) => dragon.reserved === true);
  const tab = [];
  for (let i = 0; i < filteredDragons.length; i += 1) {
    tab.push(
      <tr key={i}>
        <td>{filteredDragons[i].name}</td>
      </tr>,
    );
  }
  return (tab);
};
export default function ReservedDragons() {
  const dragons = useSelector((state) => state.dragons);
  return (
    <table id="dragons">
      <caption>My Dragons</caption>
      <tbody>
        { displayfilteredDragons(dragons)}
      </tbody>
    </table>
  );
}
