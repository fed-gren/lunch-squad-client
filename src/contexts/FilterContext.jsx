import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

FilterProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [state, setState] = useState({
    isShow: false,
  });

  return (
    <FilterContext.Provider value={{ state, setState }}>
      {children}
    </FilterContext.Provider>
  );
}
