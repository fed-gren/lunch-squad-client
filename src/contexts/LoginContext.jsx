import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

LoginProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [background, setBackground] = useState('/');

  return (
    <LoginContext.Provider value={{ background, setBackground }}>
      {children}
    </LoginContext.Provider>
  );
}
