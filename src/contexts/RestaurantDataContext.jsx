import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useFetch } from "../hooks";
import { data } from "../../config";

export const RestaurantDataContext = createContext();

export const RestaurantDataProvider = ({ children }) => {
  const { loading, data: allRestaurant, error } = useFetch({
    url: data.lunchSquadApiUrl
  });
  const [koRestaurants, setKoRestaurants] = useState(null);
  const [jpRestaurants, setJpRestaurants] = useState(null);
  const [chRestaurants, setChRestaurants] = useState(null);
  const [wsRestaurants, setWsRestaurants] = useState(null);

  useEffect(() => {
    if (!allRestaurant) return;
    const foodTypes = {
      한식: [],
      일식: [],
      중식: [],
      양식: []
    };

    allRestaurant.forEach(rest => {
      foodTypes[rest.foodType].push(rest);
    });
    setKoRestaurants([...foodTypes["한식"]]);
    setJpRestaurants([...foodTypes["일식"]]);
    setChRestaurants([...foodTypes["중식"]]);
    setWsRestaurants([...foodTypes["양식"]]);
  }, [allRestaurant]);

  return (
    <RestaurantDataContext.Provider
      value={{
        allRestaurant,
        koRestaurants,
        jpRestaurants,
        chRestaurants,
        wsRestaurants
      }}
    >
      {children}
    </RestaurantDataContext.Provider>
  );
};

RestaurantDataContext.propTypes = {
  children: PropTypes.object.isRequired
};
