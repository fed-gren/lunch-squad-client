import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

BeforeStateProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export const BeforeStateContext = createContext();

export function BeforeStateProvider({ children }) {
  const [beforeState, setBeforeState] = useState({
    pathname: '',
    filterItems: {
      한식: { name: '한식', isOn: true },
      일식: { name: '일식', isOn: true },
      중식: { name: '중식', isOn: true },
      양식: { name: '양식', isOn: true },
    },
    orderBy: null,
    isDesc: true,
  });

  return (
    <BeforeStateContext.Provider value={{
      beforeState,
      setBeforeState,
    }}
    >
      {children}
    </BeforeStateContext.Provider>
  );
}
