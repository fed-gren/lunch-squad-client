import React, { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

export const MapPageContext = createContext();

export const MapPageProvider = ({ children }) => {
  const [listShowFlag, setListShowFlag] = useState(false);

  const initCategory = [
    {
      id: 1,
      name: "한식",
      isOff: false
    },
    {
      id: 2,
      name: "일식",
      isOff: false
    },
    {
      id: 3,
      name: "중식",
      isOff: false
    },
    {
      id: 4,
      name: "양식",
      isOff: false
    }
  ];

  const [filteredCategory, setFilteredCategory] = useState(initCategory);
  const [restaurantsShowFlags, setRestaurantsShowFlags] = useState(null);

  useEffect(() => {
    const obj = {};
    filteredCategory.forEach(({ name, isOff }) => (obj[name] = !isOff));
    setRestaurantsShowFlags(obj);
  }, [filteredCategory]);

  return (
    <MapPageContext.Provider
      value={{
        listShowFlag,
        setListShowFlag,
        filteredCategory,
        setFilteredCategory,
        restaurantsShowFlags
      }}
    >
      {children}
    </MapPageContext.Provider>
  );
};

MapPageContext.propTypes = {
  children: PropTypes.object.isRequired
};
