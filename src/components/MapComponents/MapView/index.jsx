import React, { useEffect, useContext } from 'react';
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
import { cognito } from '../../../utils';
import { LoginContext } from '../../../contexts/LoginContext';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default () => {
  const query = useQuery();
  const redirectFlag = query.get('redirect');
  const authorizationCode = query.get('code');
  const logoutFlag = query.get('logout');
  const beforeState = JSON.parse(localStorage.getItem('beforeState'));
  const { setLoginFlag } = useContext(LoginContext);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken || logoutFlag) return;

    async function fetchUserInfo() {
      setLoginFlag(await cognito.fetchUserInfo({
        accessToken,
      }));
    }
    try {
      fetchUserInfo();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (!redirectFlag) return;

    async function fetchToken() {
      setLoginFlag(await cognito.fetchToken());
    }
    fetchToken();
  }, [redirectFlag]);

  useEffect(() => {
    if (!logoutFlag) return;

    setLoginFlag(false);
    localStorage.removeItem('authorizationCode');
    localStorage.removeItem('accessToken');
  }, [logoutFlag]);

  if (authorizationCode) localStorage.setItem('authorizationCode', authorizationCode);

  return (
    redirectFlag
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
