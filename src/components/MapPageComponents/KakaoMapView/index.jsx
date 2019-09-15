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

const Kakao = withJs(
  `//dapi.kakao.com/v2/maps/sdk.js?appkey=fe732a20e66cfd694c2afad012a95da9&libraries=services,clusterer,drawing&autoload=false`
)(withKakaoMap(KakaoMap));

export default () => {
  const {
    koRestaurants,
    jpRestaurants,
    chRestaurants,
    wsRestaurants
  } = useContext(RestaurantDataContext);

  const getMarkersByFoodTypes = foodType => {
    const restaurantObj = {
      한식: koRestaurants,
      일식: jpRestaurants,
      중식: chRestaurants,
      양식: wsRestaurants
    };

    const restaurants = restaurantObj[foodType];
    return (
      restaurants &&
      restaurants.map(
        ({ _id, name, positionX, positionY, foodType }, index) => {
          return (
            <InfoWindoWithMarker
              key={_id}
              delay={10 * index}
              options={{
                content: `${name}, ${foodType}`,
                lat: positionX,
                lng: positionY
              }}
            />
          );
        }
      )
    );
  };

  const Markers = {
    ko: getMarkersByFoodTypes("한식"),
    jp: getMarkersByFoodTypes("일식"),
    ch: getMarkersByFoodTypes("중식"),
    ws: getMarkersByFoodTypes("양식")
  };

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
        <MarkerClusterer options={options}>{Markers.ko}</MarkerClusterer>
        <MarkerClusterer options={options}>{Markers.jp}</MarkerClusterer>
        <MarkerClusterer options={options}>{Markers.ch}</MarkerClusterer>
        <MarkerClusterer options={options}>{Markers.ws}</MarkerClusterer>
      </Kakao>
    </Styled.KakaoMapContainer>
  );
};
