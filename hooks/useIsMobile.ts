import { useEffect, useLayoutEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const handleScreenResize = () => {
    setScreenWidth(window.innerWidth);
    screenWidth > 768 ? setIsMobile(false) : setIsMobile(true);
    // console.log(screenWidth);
  };

  useEffect(() => {
    handleScreenResize();
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, [screenWidth]);

  return isMobile;
};

export default useIsMobile;
