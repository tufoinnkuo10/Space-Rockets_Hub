const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';

const fetchrocketAPI = async () => {
  const response = await fetch(rocketsUrl, {
    method: 'GET',
  });
  const result = await response.json();
  return result;
};

export default fetchrocketAPI;
