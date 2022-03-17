import React from "react";
import useNaverMapReady from "hooks/useNaverMapReady";
import { Marker, NaverMap, RenderAfterNavermapsLoaded } from "components/common/NaverMap";

const Map = () => {
  const isNaverMapReady = useNaverMapReady(RenderAfterNavermapsLoaded, NaverMap, Marker);

  return (
    <div>
      {isNaverMapReady && (
        <RenderAfterNavermapsLoaded
          ncpClientId={"mumv6uh5j3"}
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <NaverMap
            mapDivId={"naver-map"} // default: react-naver-map
            style={{
              width: "100%",
              height: "360px",
              marginBottom: "1rem",
              borderRadius: "0.5rem",
            }}
            defaultCenter={{ lat: 37.5666805, lng: 126.9784147 }}
            defaultZoom={12}
          >
            <Marker
              key={1}
              position={{ lat: 37.551229, lng: 126.988205 }}
              icon={{
                url: "/images/marker.png",
              }}
              animation={1}
              onClick={() => {
                alert("여기는 N서울타워입니다.");
              }}
            />
          </NaverMap>
        </RenderAfterNavermapsLoaded>
      )}
    </div>
  );
};

export default Map;
