import React, { createContext } from "react";
import PropTypes from "prop-types";
import { useFetch } from "../hooks";
import { data } from "../../config";

export const RestaurantDataContext = createContext();

export const RestaurantDataProvider = ({ children }) => {
  const { loading, data: retaurantData, error } = useFetch({
    url: data.restaurantApiUrl
  });

  return (
    <RestaurantDataContext.Provider
      value={{
        loading,
        retaurantData,
        error
      }}
    >
      {children}
    </RestaurantDataContext.Provider>
  );
};

RestaurantDataContext.propTypes = {
  children: PropTypes.object.isRequired
};
