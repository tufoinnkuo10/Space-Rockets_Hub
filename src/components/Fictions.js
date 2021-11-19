import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { testMissions } from '../Redux/missions/missions';
import fictionData from './__Test__/fictionsData';

export default function Fictions() {
  const dispatch = useDispatch();
  const data = fictionData();
  useEffect(() => {
    dispatch(testMissions(data));
  }, []);
  return (
    <div>
      nothing
    </div>
  );
}
