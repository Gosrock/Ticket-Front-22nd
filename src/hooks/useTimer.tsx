import { useEffect, useRef, useState } from 'react';

const useTimer = () => {
  const [time, setTime] = useState<number>(180);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  const callback = () => {
    setTime(time - 1);
  };
  const savedCallback = useRef<typeof callback>();
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    const tick = () => {
      savedCallback.current && savedCallback.current();
      //console.log('tick');
    };
    if (isRunning) {
      timer = setInterval(tick, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (time == 0) {
      setIsRunning(false);
    }
  }, [time]);

  const resetTime = () => {
    setTime(180);
  };

  return [time, resetTime] as const;
};

export default useTimer;
