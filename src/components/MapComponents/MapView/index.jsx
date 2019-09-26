import React from "react";
import Styled from "./styles";
import { KakaoMap } from "react-kakao-maps";
import { data } from "../../../../config";
import MapLayout from "../../MapLayout";
import FilterView from "../FilterView";
import OverlayListView from "../OverlayListView";
import CodeSquadOverlayView from "../CodeSquadOverlayView";
import SelectedOverlayView from "../SelectedOverlayView";
import HoveredOverlayView from "../HoveredOverlayView";

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
          <CodeSquadOverlayView />
          <OverlayListView />
          <SelectedOverlayView />
          <HoveredOverlayView />
        </KakaoMap>
      </Styled.KakaoMapContainer>
      <FilterView />
    </MapLayout>
  );
};
