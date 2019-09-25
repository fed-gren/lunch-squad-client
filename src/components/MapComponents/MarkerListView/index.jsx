import React, { useContext } from "react";
import { CustomOverlay } from "react-kakao-maps";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

import RestaurantOverlay from "../RestaurantOverlay";

export default () => {
  const { filteredRestaurants } = useContext(RestaurantContext);

  return (
    filteredRestaurants &&
    filteredRestaurants.map(({ id, lat, lng, restaurantName }) => (
      <CustomOverlay
        key={id}
        content={<RestaurantOverlay message={restaurantName} />}
        {...{ lat, lng }}
        yAnchor={1}
      ></CustomOverlay>
    ))
  );
};
