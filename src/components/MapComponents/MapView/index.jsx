import React from "react";
import Styled from "./styles";
import { KakaoMap } from "react-kakao-maps";
import { data } from "../../../../config";
import { LoginProvider } from "../../../contexts/LoginContext";

import MapLayout from "../../MapLayout";
import OverlayListView from "../OverlayListView";
import CodeSquadOverlayView from "../CodeSquadOverlayView";
import SelectedOverlayView from "../SelectedOverlayView";
import HoveredOverlayView from "../HoveredOverlayView";
import InfoContainer from "../../InfoComponents/InfoContainer";
import ModalSwitch from "../../ModalComponents/ModalSwitch";

export default () => {
  return (
    <MapLayout>
      <LoginProvider>
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
          <InfoContainer />
        </Styled.KakaoMapContainer>
        <ModalSwitch />
      </LoginProvider>
    </MapLayout>
  );
};
