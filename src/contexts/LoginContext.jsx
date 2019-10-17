import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [background, setBackground] = useState("/");

  return (
    <LoginContext.Provider value={{ background, setBackground }}>
      {children}
    </LoginContext.Provider>
  );
};
