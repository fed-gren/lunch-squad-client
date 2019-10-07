import React, { useContext } from "react";
import Styled from "./styles";
import { InfoContext } from "../../../contexts/InfoContext";

import RestaurantListView from "../RestaurantListView";

export default function InfoFilterView() {
  const { state } = useContext(InfoContext);
  return (
    <Styled.InfoFilter showFlag={state.filterShowFlag} sortShowFlag={state.sortShowFlag}>
      필터
      <RestaurantListView/>
    </Styled.InfoFilter>
  );
}