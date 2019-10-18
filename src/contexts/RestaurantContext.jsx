import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import { data } from '../../config';

RestaurantProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export const RestaurantContext = createContext();

export function RestaurantProvider({ children }) {
  const { data: restaurants } = useFetch({
    url: data.lunchSquadApiUrl,
  });

  const [foodTypeCategories, setFoodTypeCategories] = useState({
    한식: { name: '한식', isOn: true },
    일식: { name: '일식', isOn: true },
    중식: { name: '중식', isOn: true },
    양식: { name: '양식', isOn: true },
  });

  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [hoveredRestaurant, setHoveredRestaurant] = useState(null);
  const [randomRestaurant, setRandomRestaurant] = useState(null);

  useEffect(() => {
    if (!restaurants) return;
    setFilteredRestaurants([...restaurants]);

    return () => setFilteredRestaurants(null);
  }, [restaurants]);

  useEffect(() => {
    if (!restaurants) return;

    const temp = restaurants.filter(
      ({ foodType }) => foodTypeCategories[foodType].isOn,
    );

    setFilteredRestaurants([...temp]);

    return () => setFilteredRestaurants(null);
  }, [foodTypeCategories]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        foodTypeCategories,
        setFoodTypeCategories,
        filteredRestaurants,
        selectedRestaurant,
        setSelectedRestaurant,
        hoveredRestaurant,
        setHoveredRestaurant,
        randomRestaurant,
        setRandomRestaurant,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}
