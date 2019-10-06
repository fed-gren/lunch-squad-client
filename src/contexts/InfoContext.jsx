import React, { useState, createContext } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const [state, setState] = useState({
    sortShowFlag: false
  });

  return (
    <InfoContext.Provider value={{ state, setState }}>
      {children}
    </InfoContext.Provider>
  );
};
