import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, setState] = useState({
    isShow: false,
  });

  return (
    <FilterContext.Provider value={{ state, setState }}>
      {children}
    </FilterContext.Provider>
  );
};

FilterContext.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
