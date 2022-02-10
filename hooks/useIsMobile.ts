import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [screenWidth, setScreenWidth] = useState(0);

  const handleScreenResize = () => {
    setScreenWidth(window.innerWidth);
    screenWidth > 768 ? setIsMobile(false) : setIsMobile(true);
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
