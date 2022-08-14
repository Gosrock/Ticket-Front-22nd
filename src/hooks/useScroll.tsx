import { throttle } from 'lodash';
import { useEffect, useState } from 'react';

const useScroll = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const onScroll = throttle((event: any) => {
    setScrollY(window.scrollY);
  }, 100);

  console.log(scrollY); //check point!!!

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return { scrollY };
};

export default useScroll;
