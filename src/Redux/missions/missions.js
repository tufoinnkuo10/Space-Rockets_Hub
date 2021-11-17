const LOAD_MISSIONS = 'space-rockets-hub/missions/LOAD_MISSIONS';
const API_URL = 'https://api.spacexdata.com/v3/missions';
const initState = {
  missions: [],
};

const missions = (state = initState, action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return { ...state, missions: action.missions };
    default:
      return state;
  }
};

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
    dispatch(loadMissions({ missions: [] }));
  }
};
export default missions;
