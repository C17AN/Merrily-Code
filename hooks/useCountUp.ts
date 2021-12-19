import { SetStateAction, useEffect } from "react";

const useCountUp = (
  start: number,
  end: number,
  duration: number,
  setState: (state: any) => void
) => {
  let startTimeStamp = 0;
  function step(timestamp: any) {
    if (!startTimeStamp) {
      startTimeStamp = timestamp;
    }
    const progress = timestamp - startTimeStamp;
    setState((state: any) => (state += (1000 / duration) * end));
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  useEffect(() => {
    window.requestAnimationFrame(step);
  }, []);
};

export default useCountUp;
