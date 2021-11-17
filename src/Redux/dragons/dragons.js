const LOAD_DRAGONS = 'space-rockets-hub/dragons/DRAGONS';
const API_URL = 'https://api.spacexdata.com/v3/dragons';
const initState = {
  dragons: [],
};

const dragons = (state = initState, action) => {
  switch (action.type) {
    case LOAD_DRAGONS:
      return { ...state, dragons: action.dragons };
    default:
      return state;
  }
};

export function loadDragons(result) {
  return { type: LOAD_DRAGONS, dragons: result };
}
export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch(API_URL);
    const result = await response.json();
    // console.log('data', result);
    dispatch(loadDragons(result));
  } catch (error) {
    dispatch(loadDragons({ dragons: [] }));
  }
};
export default dragons;
