import Teams from './Teams';
import { useMediaQuery } from 'react-responsive';

const TeamSection = () => {
  const isPC = useMediaQuery({ minWidth: 820 });
  return (
    <>
      <Teams isPC={isPC} type="YB" />
      <Teams isPC={isPC} type="OB" />
    </>
  );
};
export default TeamSection;
