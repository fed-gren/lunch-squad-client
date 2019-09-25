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

  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  useEffect(() => {
    if (!restaurants) return;
    setFilteredRestaurants([...restaurants]);
  }, [restaurants]);

  useEffect(() => {
    if (!restaurants) return;

    const temp = restaurants.filter(
      ({ foodType }) => foodTypeCategories[foodType].isOn
    );

    setFilteredRestaurants([...temp]);
  }, [foodTypeCategories]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        foodTypeCategories,
        setFoodTypeCategories,
        filteredRestaurants
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

RestaurantContext.propTypes = {
  children: PropTypes.object.isRequired
};
