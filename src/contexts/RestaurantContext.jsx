import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useFetch } from "../hooks";
import { data } from "../../config";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const { loading, data: restaurants, error } = useFetch({
    url: data.lunchSquadApiUrl
  });

  useEffect(() => {
    if (!restaurants) return;
    console.log(restaurants);
  }, [restaurants]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

RestaurantContext.propTypes = {
  children: PropTypes.object.isRequired
};
