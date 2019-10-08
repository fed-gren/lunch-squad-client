import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const LoginContext = createContext();

LoginContext.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export const LoginProvider = ({ children }) => {
  const [openFlag, setOpenFlag] = useState(false);

  return (
    <LoginContext.Provider value={{ openFlag, setOpenFlag }}>
      {children}
    </LoginContext.Provider>
  );
};
