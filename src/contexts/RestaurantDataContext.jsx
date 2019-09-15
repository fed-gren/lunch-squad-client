import React, { createContext } from "react";
import PropTypes from "prop-types";
import { useFetch } from "../hooks";
import { data } from "../../config";

export const RestaurantDataContext = createContext();

export const RestaurantDataProvider = ({ children }) => {
  const { loading, data: lunchSquadData, error } = useFetch({
    url: data.lunchSquadApiUrl
  });

  return (
    <RestaurantDataContext.Provider
      value={{
        loading,
        lunchSquadData,
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
