import React from "react";
import Styled from "./styles";
import { InfoProvider } from "../../../contexts/InfoContext";

import InfoTopbar from "../InfoTopbar";
import InfoSortView from "../InfoSortView";
import InfoFilterView from "../InfoFilterView";

export default function styles() {
  return (
    <Styled.InfoContainer>
      <InfoProvider>
        <InfoTopbar />
        <InfoSortView />
        <InfoFilterView />
      </InfoProvider>
    </Styled.InfoContainer>
  );
}
