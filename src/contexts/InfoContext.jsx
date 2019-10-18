import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

InfoProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export const InfoContext = createContext();

export function InfoProvider({ children }) {
  const [state, setState] = useState({
    sortShowFlag: false,
    filterShowFlag: false,
  });

  return (
    <InfoContext.Provider value={{ state, setState }}>
      {children}
    </InfoContext.Provider>
  );
}
