import React, { useContext } from "react";
import Styled from "./styles";

export default function index() {
  return (
    <Styled.ReviewTextarea>
      <textarea placeholder="리뷰를 작성해주세요."></textarea>
    </Styled.ReviewTextarea>
  );
}
