import React, { useContext, Fragment } from "react";
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

const Kakao = withJs(
  `//dapi.kakao.com/v2/maps/sdk.js?appkey=fe732a20e66cfd694c2afad012a95da9&libraries=services,clusterer,drawing&autoload=false`
)(withKakaoMap(KakaoMap));

export default () => {
  const { loading, error, lunchSquadData } = useContext(RestaurantDataContext);
  console.log(loading, error, lunchSquadData);

  const Markers =
    lunchSquadData &&
    lunchSquadData.allRestaurant &&
    lunchSquadData.allRestaurant.map(
      ({ _id, name, positionX, positionY }, index) => {
        return (
          <Fragment key={_id}>
            <InfoWindoWithMarker
              delay={100 * index}
              options={{
                content: name,
                lat: positionX,
                lng: positionY
              }}
            />
          </Fragment>
        );
      }
    );

  const options = {
    gridSize: 35,
    averageCenter: true,
    minLevel: 4
  };

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
      >
        <MarkerClusterer options={options}>{Markers}</MarkerClusterer>
      </Kakao>
    </Styled.KakaoMapContainer>
  );
};
