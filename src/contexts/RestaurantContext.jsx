import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useFetch } from "../hooks";
import { data } from "../../config";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const { loading, data: restaurants, error } = useFetch({
    url: data.lunchSquadApiUrl
  });

  const [foodTypeCategories, setFoodTypeCategories] = useState({
    한식: { name: "한식", isOn: true },
    일식: { name: "일식", isOn: true },
    중식: { name: "중식", isOn: true },
    양식: { name: "양식", isOn: true }
  });

  useEffect(() => {
    if (!restaurants) return;
    console.log(restaurants);
  }, [restaurants]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        foodTypeCategories,
        setFoodTypeCategories
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

RestaurantContext.propTypes = {
  children: PropTypes.object.isRequired
};
