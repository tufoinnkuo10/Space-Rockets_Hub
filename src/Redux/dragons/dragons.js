const LOAD_DRAGONS = 'space-rockets-hub/dragons/LOAD_DRAGONS';
const RESERVED_DRAGON = 'space-rockets-hub/dragons/RESERVED_DRAGON';
const API_URL = 'https://api.spacexdata.com/v3/dragons';
const initState = {
  dragons: [],
};
function reservedDragon(state, action) {
  const { dragons } = state;
  const index = dragons.findIndex((dragon) => dragon.id === action.id);
  if (index !== -1) {
    if (dragons[index].reserved) {
      dragons[index].reserved = false;
    } else dragons[index].reserved = true;

    return { ...state, dragons };
  }

  return state;
}

const dragons = (state = initState, action) => {
  switch (action.type) {
    case LOAD_DRAGONS:
      return { ...state, dragons: action.dragons };
    case RESERVED_DRAGON:
      return reservedDragon(state, action);
    default:
      return state;
  }
};

export function reserved(id) {
  return { type: RESERVED_DRAGON, id };
}
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
