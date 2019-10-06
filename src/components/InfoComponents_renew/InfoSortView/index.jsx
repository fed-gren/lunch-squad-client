import React, {useContext} from "react";
import Styled from "./styles";
import { InfoContext } from "../../../contexts/InfoContext";

export default function InfoSortView() {
  const {state} = useContext(InfoContext);
  return (
    <Styled.InfoSort showFlag={state.sortShowFlag}>
      정렬
    </Styled.InfoSort>
  );
}