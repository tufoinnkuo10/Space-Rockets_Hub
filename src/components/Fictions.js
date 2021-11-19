import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { testDragons } from '../Redux/dragons/dragons';
import { testMissions } from '../Redux/missions/missions';
import fictionData, { returnDragons } from './__Test__/fictionsData';

export default function Fictions() {
  const dispatch = useDispatch();
  const missions = fictionData();
  const dragons = returnDragons();

  useEffect(() => {
    dispatch(testMissions(missions));
    dispatch(testDragons(dragons));
  }, []);
  return (
    <div>
      nothing
    </div>
  );
}
