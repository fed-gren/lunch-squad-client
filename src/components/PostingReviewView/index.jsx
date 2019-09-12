import React, { useContext } from "react";
import Styled from "./styles";
import { PostingReviewPageContext } from "../../contexts/PostingReviewPageContext";
//component
import SetRateView from "../SetRateView";
import RateTextView from "../RateTextView";
import RateTitleView from "../RateTitleView";

export default function index() {
  const { tasteRate, setTasteRate, priceRate, setPriceRate } = useContext(
    PostingReviewPageContext
  );
  return (
    <Styled.PostingReview>
      <Styled.Rates>
        <div className="taste">
          <RateTitleView rateTitle="맛" />
          <SetRateView {...{ rate: tasteRate, setRate: setTasteRate }} />
          <RateTextView {...{ rate: tasteRate }} />
        </div>
        <div className="price">
          <RateTitleView rateTitle="가격" />
          <SetRateView {...{ rate: priceRate, setRate: setPriceRate }} />
          <RateTextView {...{ rate: priceRate }} />
        </div>
      </Styled.Rates>
    </Styled.PostingReview>
  );
}
