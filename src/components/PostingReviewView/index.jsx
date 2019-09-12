import React, { useContext } from "react";
import Styled from "./styles";
import { PostingReviewPageContext } from "../../contexts/PostingReviewPageContext";
//component
import SetRateView from "../SetRateView";

export default function index() {
  const { tasteRate, setTasteRate } = useContext(PostingReviewPageContext);
  return (
    <Styled.PostingReview>
      <SetRateView {...{ rate: tasteRate, setRate: setTasteRate }} />
    </Styled.PostingReview>
  );
}
