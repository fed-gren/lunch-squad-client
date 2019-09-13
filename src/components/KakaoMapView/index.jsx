import React from "react";
import Styled from "./styles";
import { withJs, withKakaoMap, KakaoMap } from "react-kakaomap-api";
import { data } from "../../../config";

const Kakao = withJs(
  `//dapi.kakao.com/v2/maps/sdk.js?appkey=fe732a20e66cfd694c2afad012a95da9&libraries=services,clusterer,drawing&autoload=false`
)(withKakaoMap(KakaoMap));

export default () => {
  const onZoomChang = map => {
    const level = map.getLevel();
    console.log("level: ", level);
  };

  return (
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
  );
};
