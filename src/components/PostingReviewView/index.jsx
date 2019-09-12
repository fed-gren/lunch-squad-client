import React, { useContext } from "react";
import Styled from "./styles";
import { PostingReviewPageContext } from "../../contexts/PostingReviewPageContext";
//component
import SetRateView from "../SetRateView";
import RateTextView from "../RateTextView";

export default function index() {
  const { tasteRate, setTasteRate, priceRate, setPriceRate } = useContext(
    PostingReviewPageContext
  );
  return (
    <Styled.PostingReview>
      <Styled.Rates>
        <div className="taste">
          <SetRateView {...{ rate: tasteRate, setRate: setTasteRate }} />
          <RateTextView {...{ rate: tasteRate }} />
        </div>
        <div className="price">
          <SetRateView {...{ rate: priceRate, setRate: setPriceRate }} />
          <RateTextView {...{ rate: priceRate }} />
        </div>
      </Styled.Rates>
    </Styled.PostingReview>
  );
}
