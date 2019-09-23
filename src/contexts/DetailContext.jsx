import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const DetailContext = createContext();

export const DetailProvider = ({ children }) => {
  const [detailState, setDetailState] = useState({
    id: null,
    name: null,
    businessHour: null,
    contactNumber: null
  });

  return (
    <DetailContext.Provider value={{ detailState, setDetailState }}>
      {children}
    </DetailContext.Provider>
  );
};

DetailContext.propTypes = {
  children: PropTypes.object.isRequired
};
