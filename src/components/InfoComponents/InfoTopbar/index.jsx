import React, { useContext, useCallback } from "react";
import Styled from "./styles";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdSort, MdFilterList } from "react-icons/md"
import { InfoContext } from "../../../contexts/InfoContext";
import { useLocation } from "react-router-dom";

import ButtonView from "../../SharedComponents/ButtonView";
import LinkButtonView from "../../SharedComponents/LinkButtonView";

const controllerStyles = {
  fontSize: "1.4rem",
  bgColor: "transparent",
  width: "1.8rem",
  height: "1.4rem",
  margin: "0 0.4rem 0 0"
}
const loginStyles = {
  fontSize: "0.8rem",
  bgColor: "transparent",
  height: "1.4rem",
  color: "#2980b9"
}

export default function InfoTopbar() {
  const { state, setState } = useContext(InfoContext);
  let location = useLocation();

  const toggleSortShow = useCallback(_ => {
    setState({
      ...state,
      sortShowFlag: !state.sortShowFlag
    });
  }, [state, state.sortShowFlag]);

  const toggleFilterShow = useCallback(_ => {
    setState({
      ...state,
      filterShowFlag: !state.filterShowFlag
    });
  }, [state, state.filterShowFlag]);

  return (
    <Styled.InfoTopbar>
      <div className="controller">
        <ButtonView name={<MdKeyboardArrowUp />} {...controllerStyles} />
        <ButtonView name={<MdSort />} onClick={toggleSortShow} {...controllerStyles} />
        <ButtonView name={<MdFilterList />} onClick={toggleFilterShow} {...controllerStyles} />
      </div>
      {/* TODO: 현재 로그인 되어있는지, 상태에 따라 로그인 버튼 혹은 유저 정보와 로그아웃 뷰로 구분해서 보여주기 */}
      <Styled.InfoLogin>
        <LinkButtonView
          name="로그인"
          to={{
            pathname: `/login`,
            state: { background: location }
          }}
          {...loginStyles}
        />
      </Styled.InfoLogin>
    </Styled.InfoTopbar>
  );
}