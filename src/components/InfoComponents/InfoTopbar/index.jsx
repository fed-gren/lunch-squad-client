import React, { useContext } from "react";
import Styled from "./styles";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdSort, MdFilterList } from "react-icons/md"
import ButtonView from "../../SharedComponents/ButtonView";
import { InfoContext } from "../../../contexts/InfoContext";
import { LoginContext } from "../../../contexts/LoginContext";

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
  const { setOpenFlag } = useContext(LoginContext);

  const toggleSortShow = _ => {
    setState({
      ...state,
      sortShowFlag: !state.sortShowFlag
    });
  }
  const toggleFilterShow = _ => {
    setState({
      ...state,
      filterShowFlag: !state.filterShowFlag
    });
  }

  return (
    <Styled.InfoTopbar>
      <div className="controller">
        <ButtonView name={<MdKeyboardArrowUp />} {...controllerStyles} />
        <ButtonView name={<MdSort />} onClick={toggleSortShow} {...controllerStyles} />
        <ButtonView name={<MdFilterList />} onClick={toggleFilterShow} {...controllerStyles} />
      </div>
      {/* TODO: 현재 로그인 되어있는지, 상태에 따라 로그인 버튼 혹은 유저 정보와 로그아웃 뷰로 구분해서 보여주기 */}
      <Styled.InfoLogin>
        <ButtonView name="로그인" onClick={() => setOpenFlag(true)} {...loginStyles} />
      </Styled.InfoLogin>
    </Styled.InfoTopbar>

  );
}