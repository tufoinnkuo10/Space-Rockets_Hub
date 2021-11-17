const LOAD_MISSIONS = 'space-rockets-hub/missions/LOAD_MISSIONS';
const RESERVED_MISSION = 'space-rockets-hub/missions/RESERVED_MISSION';
const API_URL = 'https://api.spacexdata.com/v3/missions';
const initState = {
  missions: [],
};
function reservedMission(state, action) {
  const { missions } = state;
  // console.log('during the process:', state.missions);
  const index = missions.findIndex((mission) => mission.mission_id === action.id);
  if (index !== -1) {
    if (missions[index].reserved) {
      missions[index].reserved = false;
    } else missions[index].reserved = true;
    console.log('found the mission:', missions[index]);

    return { ...state, missions };
  }

  return state;
}

const missions = (state = initState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return { ...state, missions: action.missions };
    case RESERVED_MISSION:
      return reservedMission(state, action);
    default:
      return state;
  }
};

export function reserved(id) {
  return { type: RESERVED_MISSION, id };
}
export function loadMissions(result) {
  return { type: LOAD_MISSIONS, missions: result };
}
export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    // console.log('data', result);
    dispatch(loadMissions(result));
  } catch (error) {
    console.log(error);
    // dispatch(loadMissions({ missions: [] }));
  }
};
export default missions;
