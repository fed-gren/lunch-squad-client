import React from "react";
import Styled from "./styles";

export default function index({ name, phone, openTime, closeTime }) {
  return (
    <Styled.DetailTitle>
      <h1>식당 이름</h1>
      <h2>02-623-2352</h2>
      <h2>월 ~ 토 (10:00 ~ 20:00)</h2>
    </Styled.DetailTitle>
  );
}
