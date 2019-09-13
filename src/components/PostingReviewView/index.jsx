import React, { useContext } from "react";
import Styled from "./styles";
import { PostingReviewPageContext } from "../../contexts/PostingReviewPageContext";
//component
import SetRateView from "../SetRateView";
import RateTextView from "../RateTextView";
import RateTitleView from "../RateTitleView";
import ReviewTextareaView from "../ReveiwTextareaView";
import PostingReivewButtonPartView from "../PostingReviewButtonPartView";

export default function index() {
  const {
    tasteRate,
    setTasteRate,
    selectedTasteRate,
    setSelectedTasteRate,
    tempTasteRate,
    setTempTasteRate,
    priceRate,
    setPriceRate,
    selectedPriceRate,
    setSelectedPriceRate,
    tempPriceRate,
    setTempPriceRate
  } = useContext(PostingReviewPageContext);

  return (
    <Styled.PostingRate>
      <p>맛, 가격은 어땠나요?</p>
      <Styled.Rates>
        <div className="taste">
          <RateTitleView rateTitle="맛" />
          <SetRateView
            {...{
              rate: tasteRate,
              setRate: setTasteRate,
              selectedRate: selectedTasteRate,
              setSelectedRate: setSelectedTasteRate,
              tempRate: tempTasteRate,
              setTempRate: setTempTasteRate
            }}
          />
          <RateTextView
            {...{ rate: tasteRate, selectedRate: selectedTasteRate }}
          />
        </div>
        <div className="price">
          <RateTitleView rateTitle="가격" />
          <SetRateView
            {...{
              rate: priceRate,
              setRate: setPriceRate,
              selectedRate: selectedPriceRate,
              setSelectedRate: setSelectedPriceRate,
              tempRate: tempPriceRate,
              setTempRate: setTempPriceRate
            }}
          />
          <RateTextView
            {...{ rate: priceRate, selectedRate: selectedPriceRate }}
          />
        </div>
      </Styled.Rates>
      <ReviewTextareaView />
      <PostingReivewButtonPartView />
    </Styled.PostingRate>
  );
}
