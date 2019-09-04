import React from "react";
import Styled from "./styles";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
import { data } from "../../../config";

export default () => {
  return (
    <Styled.NaverMap>
      <RenderAfterNavermapsLoaded
        // clientId={YOUR_CLIENT_ID}
        // Naver Cloud Platform 유저의 경우 props.clientId 대신 props.ncpClientId를 사용합니다.
        ncpClientId={data.ncpClientId}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMap {...data.naverMapConfig} />
      </RenderAfterNavermapsLoaded>
    </Styled.NaverMap>
  );
};
