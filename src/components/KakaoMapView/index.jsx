import React, { useEffect } from "react";
import Styled from "./styles";
import { Map, Marker } from "react-kakao-maps";
import { data } from "../../../config";

export default () => {
  return (
    <Styled.KakaoMap>
      <Map
        options={{
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3
        }}
      ></Map>
    </Styled.KakaoMap>
  );
};
