import React from "react";
import Styled from "./styles";
import { InfoProvider } from "../../../contexts/InfoContext";

import InfoTopbar from "../InfoTopbar";

export default function styles() {
  return (
    <Styled.InfoContainer>
      <InfoProvider>
        <InfoTopbar />
      </InfoProvider>
    </Styled.InfoContainer>
  );
}
