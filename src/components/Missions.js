import React from 'react';

const displayItem = () => {
  const tab = [];
  for (let i = 0; i < 3; i += 1) {
    tab.push(
      <tr>
        <td>Thaicom</td>
        <td>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </td>
        <td>
          <span className="badge">Not a member</span>
        </td>
        <td>
          <button className="btn" type="button">Join Mission</button>
        </td>
      </tr>,
    );
  }
  return tab;
};
export default function Missions() {
  return (
    <div>
      <table>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Status</th>
        </tr>
        {displayItem()}
      </table>
    </div>
  );
}
