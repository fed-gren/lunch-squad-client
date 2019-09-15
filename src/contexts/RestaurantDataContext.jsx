import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import { useFetch } from "../hooks";
import { data } from "../../config";

export const RestaurantDataContext = createContext();

export const RestaurantDataProvider = ({ children }) => {
  const { loading, data: restauarantData, error } = useFetch({
    url: data.restaurantApiUrl
  });

  return (
    <RestaurantDataContext.Provider
      value={{
        loading,
        restauarantData,
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
