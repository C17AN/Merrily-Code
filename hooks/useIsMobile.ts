import { useEffect, useLayoutEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const handleScreenResize = () => {
    setScreenWidth(window.innerWidth);
    screenWidth > 768 ? setIsMobile(false) : setIsMobile(true);
    // window.removeEventListener("resize", handleScreenResize);
    // console.log(screenWidth);
  };

  useEffect(() => {
    handleScreenResize();
    window.addEventListener("resize", handleScreenResize);
  }, [screenWidth]);

  return isMobile;
};

export default useIsMobile;
