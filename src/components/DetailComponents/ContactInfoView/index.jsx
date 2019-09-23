import React, { useContext } from "react";
import Styled from "./styles";
import { DetailContext } from "../../../contexts/DetailContext";

export default function index() {
  const { detailState } = useContext(DetailContext);
  return (
    <Styled.ContactInfo>
      <p>{detailState.businessHour}</p>
      <p>{detailState.contactNumber}</p>
    </Styled.ContactInfo>
  );
}
