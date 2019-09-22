import React, { useContext } from "react";
import Styled from "./styles";
import { KakaoMap, Marker } from "react-kakao-maps";
import { data } from "../../../../config";
import { RestaurantDataContext } from "../../../contexts/RestaurantDataContext";
import { MapPageContext } from "../../../contexts/MapPageContext";
import MapLayout from "../../MapLayout";
import FilterView from "../FilterView";

export default () => {
  return (
    <MapLayout>
      <Styled.KakaoMapContainer>
        <KakaoMap
          apiUrl={process.env.KAKAO_MAP_API_URL}
          width="100%"
          height="100%"
          level={2}
          lat={data.kakaoMapConfig.defaultCenter.lat}
          lng={data.kakaoMapConfig.defaultCenter.lng}
        >
          <Marker
            lat={data.kakaoMapConfig.defaultCenter.lat}
            lng={data.kakaoMapConfig.defaultCenter.lng}
          ></Marker>
        </KakaoMap>
      </Styled.KakaoMapContainer>
      <FilterView />
    </MapLayout>
  );
};
