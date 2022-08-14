import Teams from './Teams';
import { useMediaQuery } from 'react-responsive';

const TeamSection = () => {
  const isPC = useMediaQuery({ minWidth: 820 });
  return (
    <>
      <div id="yb">
        <Teams isPC={isPC} type="YB" />
      </div>
      <div id="ob">
        <Teams isPC={isPC} type="OB" />
      </div>
    </>
  );
};
export default TeamSection;
