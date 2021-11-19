import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, reserved } from '../Redux/dragons/dragons';
// import { fetchData } from '../Redux/dragons/dragons';

const displayItem = (dragonTab, dispatch) => {
  const { dragons } = dragonTab;
  const tab = [];
  for (let i = 0; i < dragons.length; i += 1) {
    tab.push(
      <tr key={i}>
        <td>
          {dragons[i].dragon_name}
        </td>
        <td>
          { dragons[i].description }
        </td>
        <td className="text-center">
          <span className={dragons[i].reserved ? 'badge-active' : 'badge-unenable'}>{dragons[i].reserved ? 'Active Member' : 'Not A MEMBER'}</span>
        </td>
        <td className="text-center">
          <button
            className={dragons[i].reserved ? 'btn btn-red' : 'btn btn-gray'}
            onClick={() => dispatch(reserved(dragons[i].dragon_id))}
            id={dragons[i].dragon_id}
            type="button"
          >
            {dragons[i].reserved ? 'Leave Dragon' : 'Join Dragon'}
          </button>
        </td>
      </tr>,
    );
  }
  return (tab);
};
const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);
  useEffect(() => {
    if (dragons.dragons.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch]);
  return (
    <div>
      <table className="table-dragons">
        <thead>
          <tr>
            <th>Dragon</th>
            <th>Description</th>
            <th className="min-width">Status</th>
            <th className="min-width">Action</th>
          </tr>
        </thead>
        <tbody>
          {displayItem(dragons, dispatch)}
        </tbody>
      </table>
    </div>
  );
};
export default Dragons;
