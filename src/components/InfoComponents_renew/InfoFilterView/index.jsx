import React, { useContext } from "react";
import Styled from "./styles";
import { InfoContext } from "../../../contexts/InfoContext";

export default function InfoFilterView() {
  const { state } = useContext(InfoContext);
  return (
    <Styled.InfoFilter showFlag={state.filterShowFlag} sortShowFlag={state.sortShowFlag}>
      필터
    </Styled.InfoFilter>
  );
}