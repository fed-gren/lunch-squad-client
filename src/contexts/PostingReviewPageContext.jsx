import React, { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

export const PostingReviewPageContext = createContext();

export const PostingReviewPageProvider = ({ children }) => {
  const [tasteRate, setTasteRate] = useState(0);
  const [priceRate, setPriceRate] = useState(0);

  return (
    <PostingReviewPageContext.Provider
      value={{
        tasteRate,
        setTasteRate,
        priceRate,
        setPriceRate
      }}
    >
      {children}
    </PostingReviewPageContext.Provider>
  );
};

PostingReviewPageContext.propTypes = {
  children: PropTypes.object.isRequired
};
