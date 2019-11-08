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
import { LoginContext } from '../../../contexts/LoginContext';

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
  const { loginFlag } = useContext(LoginContext);


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

  const moveToLogout = useCallback((url) => {
    window.location = url;
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
      <Styled.InfoLogin>
        {loginFlag ? (
          <ButtonView
            name="로그아웃"
            onClick={() => moveToLogout(data.logoutUrl)}
            {...loginStyles}
          />
        ) : (
          <ButtonView
            name="로그인"
            onClick={() => moveToLogin(data.loginUrl)}
            {...loginStyles}
          />
        )}
      </Styled.InfoLogin>
    </Styled.InfoTopbar>
  );
}
