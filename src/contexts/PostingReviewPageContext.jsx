import React, { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

export const PostingReviewPageContext = createContext();

export const PostingReviewPageProvider = ({ children }) => {
  const [tasteRate, setTasteRate] = useState(null);
  const [selectedTasteRate, setSelectedTasteRate] = useState(null);
  const [tempTasteRate, setTempTasteRate] = useState(null);

  const [priceRate, setPriceRate] = useState(null);
  const [selectedPriceRate, setSelectedPriceRate] = useState(null);
  const [tempPriceRate, setTempPriceRate] = useState(null);

  return (
    <PostingReviewPageContext.Provider
      value={{
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
      }}
    >
      {children}
    </PostingReviewPageContext.Provider>
  );
};

PostingReviewPageContext.propTypes = {
  children: PropTypes.object.isRequired
};
