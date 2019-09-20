import React, { useContext } from "react";
import Styled from "./styles";
import {
  withJs,
  withKakaoMap,
  KakaoMap,
  MarkerClusterer,
  InfoWindoWithMarker
} from "react-kakaomap-api";
import { data } from "../../../../config";
import { RestaurantDataContext } from "../../../contexts/RestaurantDataContext";
import { MapPageContext } from "../../../contexts/MapPageContext";
import MapLayout from "../../MapLayout";

const Kakao = withJs(process.env.KAKAO_MAP_API_URL)(withKakaoMap(KakaoMap));

export default () => {
  const onZoomChang = map => {
    const level = map.getLevel();
    console.log("level: ", level);
  };

  return (
    <MapLayout>
      <Styled.KakaoMapContainer>
        <Kakao
          onZoomChang={onZoomChang}
          options={{
            lat: data.kakaoMapConfig.defaultCenter.lat,
            lng: data.kakaoMapConfig.defaultCenter.lng,
            zoom: "BOTTOMRIGHT",
            level: 3
          }}
        ></Kakao>
      </Styled.KakaoMapContainer>
    </MapLayout>
  );
};
