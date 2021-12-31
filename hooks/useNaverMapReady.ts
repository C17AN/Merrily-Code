import { useEffect, useState } from "react";

const useNaverMapReady = (RenderAfterNavermapsLoaded, NaverMap, Marker) => {
  const [isNaverMapReady, setIsNaverMapReady] = useState(false);
  useEffect(() => {
    setIsNaverMapReady(RenderAfterNavermapsLoaded && NaverMap && Marker);
  }, [RenderAfterNavermapsLoaded, NaverMap, Marker]);

  return isNaverMapReady;
};

export default useNaverMapReady;
