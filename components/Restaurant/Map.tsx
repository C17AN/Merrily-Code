import useIsBrowser from "hooks/useIsBrowser";
import React, { Suspense, useEffect, useState } from "react";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";

interface Props {}

const Map = (props: Props) => {
  const isBrowser = useIsBrowser();
  const [temp, setTemp] = useState(null);
  useEffect(() => {
    getNaverMap();
  }, []);

  const getNaverMap = async () => {
    const map = await import("react-naver-maps");
    setTemp(map.RenderAfterNavermapsLoaded);
  };

  console.log(temp);

  return (
    <div>
      {/* {isBrowser ? (
        <RenderAfterNavermapsLoaded
          clientId={"mumv6uh5j3"}
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <p>Navermaps Loaded!</p>
        </RenderAfterNavermapsLoaded>
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default Map;
