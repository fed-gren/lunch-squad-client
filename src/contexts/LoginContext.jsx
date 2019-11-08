import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

LoginProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [loginFlag, setLoginFlag] = useState(false);
  const [authCode, setAuthCode] = useState(null);

  return (
    <LoginContext.Provider value={{
      loginFlag,
      setLoginFlag,
      authCode,
      setAuthCode,
    }}
    >
      {children}
    </LoginContext.Provider>
  );
}
