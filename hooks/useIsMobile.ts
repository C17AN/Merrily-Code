import { useLayoutEffect, useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(
    typeof window !== "undefined" && window.innerWidth < 768 ? true : false
  );
  const [screenWidth, setScreenWidth] = useState(0);

  const handleScreenResize = () => {
    setScreenWidth(window.innerWidth);
    console.log(screenWidth, isMobile);
    screenWidth > 768 ? setIsMobile(false) : setIsMobile(true);
  };

  useEffect(() => {
    handleScreenResize();
    // 매번 addEventListener를 사용하는 이유
    // window.innerWidth는 해당 이벤트가 호출된 시점의 값만을 기억한다.
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, [screenWidth]);

  // useEffect(() => {
  //   handleScreenResize();
  //   window.addEventListener("resize", handleScreenResize);
  //   return () => {
  //     window.removeEventListener("resize", handleScreenResize);
  //   };
  // }, []);

  return isMobile;
};

export default useIsMobile;
