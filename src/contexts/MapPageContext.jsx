import React, { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

export const MapPageContext = createContext();

export const MapPageProvider = ({ children }) => {
  const [listShowFlag, setListShowFlag] = useState(false);

  return (
    <MapPageContext.Provider
      value={{
        listShowFlag,
        setListShowFlag
      }}
    >
      {children}
    </MapPageContext.Provider>
  );
};

MapPageContext.propTypes = {
  children: PropTypes.object.isRequired
};
