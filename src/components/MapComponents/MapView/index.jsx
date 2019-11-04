import React from 'react';
import { KakaoMap } from 'react-kakao-maps';
import { useLocation, Redirect } from 'react-router-dom';
import Styled from './styles';
import { data } from '../../../../config';

import MapLayout from '../../MapLayout';
import OverlayListView from '../OverlayListView';
import CodeSquadOverlayView from '../CodeSquadOverlayView';
import SelectedOverlayView from '../SelectedOverlayView';
import HoveredOverlayView from '../HoveredOverlayView';
import InfoContainer from '../../InfoComponents/InfoContainer';
import ModalSwitch from '../../ModalComponents/ModalSwitch';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default () => {
  const query = useQuery();
  const isRedirect = query.get('redirect');
  const beforeState = JSON.parse(localStorage.getItem('beforeState'));

  return (
    isRedirect
      ? (
        <Redirect
          to={{
            pathname: `${beforeState.pathname}`,
            search: '?loadFilterItems=true',
          }}
        />
      )
      : (
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
            <InfoContainer />
          </Styled.KakaoMapContainer>
          <ModalSwitch />
        </MapLayout>
      )
  );
};
