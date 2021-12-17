import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>();

  const handleScreenResize = () => {
    const screenWidth = window.innerWidth;
    screenWidth > 768 ? setIsMobile(false) : setIsMobile(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return window.removeEventListener("resize", handleScreenResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
