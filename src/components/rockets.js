import { useSelector } from 'react-redux';
import SingleRocket from './Mainrocket';

const RocketElement = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <>
      {
        rockets.map((rocket) => (
          <SingleRocket key={rocket.id} data={rocket} />
        ))
      }
    </>
  );
};

export default RocketElement;
