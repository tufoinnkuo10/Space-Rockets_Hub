import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/dragons/dragons';
// import { fetchData } from '../Redux/dragons/dragons';

const displayItem = (dragonTab) => {
  const { dragons } = dragonTab;
  const tab = [];
  for (let i = 0; i < dragons.length; i += 1) {
    tab.push(
      <tr key={i}>
        <td>
          {dragons[i].dragons_name}
        </td>
        <td>
          { dragons[i].description }
        </td>
        <td>
          <span className="badge">Not a member</span>
        </td>
        <td>
          <button className="btn" id={dragons[i].dragon_id} type="button">Join Dragon</button>
        </td>
      </tr>,
    );
  }
  return (tab);
};
const Dragons = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const dragons = useSelector((state) => state.dragons);
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Dragon</th>
            <th>Description</th>
            <th>Status</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {displayItem(dragons)}
        </tbody>
      </table>
    </div>
  );
};
export default Dragons;
