import React, {
  useContext, useCallback,
} from 'react';
import {
  MdSort,
  MdFilterList,
  MdVisibility,
  MdVisibilityOff,
} from 'react-icons/md';
import Styled from './styles';
import { InfoContext } from '../../../contexts/InfoContext';
import { BeforeStateContext } from '../../../contexts/BeforeStateContext';
import { data } from '../../../../config';

import ButtonView from '../../SharedComponents/ButtonView';

const controllerStyles = {
  fontSize: '1.4rem',
  bgColor: 'transparent',
  width: '1.8rem',
  height: '1.4rem',
  margin: '0 0.4rem 0 0',
};
const loginStyles = {
  fontSize: '0.8rem',
  bgColor: 'transparent',
  height: '1.4rem',
  color: '#2980b9',
};

export default function InfoTopbar() {
  const { state, setState } = useContext(InfoContext);
  const { beforeState } = useContext(BeforeStateContext);

  const toggleSortShow = useCallback(() => {
    setState({
      ...state,
      sortShowFlag: !state.sortShowFlag,
    });
  }, [state, state.sortShowFlag]);

  const toggleFilterShow = useCallback(() => {
    setState({
      ...state,
      filterShowFlag: !state.filterShowFlag,
    });
  }, [state, state.filterShowFlag]);

  const toggleFoldFlag = useCallback(() => {
    setState({
      ...state,
      foldFlag: !state.foldFlag,
    });
  }, [state, state.foldFlag]);

  const moveToLogin = useCallback((url) => {
    localStorage.setItem('beforeState', JSON.stringify(beforeState));
    window.location = url;
  }, [beforeState]);

  const fetchToken = useCallback((url) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${process.env.ENCODED_AUTHORIZATION}`,
        Host: 'lunchsquad.auth.ap-northeast-2.amazoncognito.com',
        'Accept-Encoding': 'gzip, deflate',
        Connection: 'keep-alive',
        'cache-control': 'no-cache',
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: `${process.env.COGNITO_CLIENT_ID}`,
        redirect_uri: `${process.env.COGNITO_REDIRECT_URL}`,
        code: `${localStorage.getItem('authorizationCode')}`,
      }),
    })
      .then((res) => JSON.parse(res))
      .then((resData) => console.log(resData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Styled.InfoTopbar>
      <div className="controller">
        <ButtonView
          name={state.foldFlag ? <MdVisibility /> : <MdVisibilityOff />}
          onClick={toggleFoldFlag}
          {...controllerStyles}
        />
        <ButtonView
          name={<MdSort />}
          onClick={toggleSortShow}
          {...controllerStyles}
          color={state.sortShowFlag ? '#000' : '#fff'}
        />
        <ButtonView
          name={<MdFilterList />}
          onClick={toggleFilterShow}
          {...controllerStyles}
          color={state.filterShowFlag ? '#000' : '#fff'}
        />
      </div>
      {/* TODO: 현재 로그인 되어있는지, 상태에 따라 로그인 버튼 혹은 유저 정보와 로그아웃 뷰로 구분해서 보여주기 */}
      <Styled.InfoLogin>
        <ButtonView
          name="로그인"
          onClick={() => moveToLogin(data.loginUrl)}
          {...loginStyles}
        />
        <ButtonView
          name="토큰 요청"
          onClick={() => fetchToken(data.getTokenUrl)}
          {...loginStyles}
        />
      </Styled.InfoLogin>
    </Styled.InfoTopbar>
  );
}
