import React, { useContext } from "react";
import { CustomOverlay } from "react-kakao-maps";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

import RestaurantOverlay from "../RestaurantOverlay";

export default () => {
  const { restaurants, foodTypeCategories } = useContext(RestaurantContext);

  return (
    restaurants &&
    restaurants.map(
      ({ id, lat, lng, restaurantName, foodType }) =>
        foodTypeCategories[foodType].isOn && (
          <CustomOverlay
            key={id}
            content={<RestaurantOverlay message={restaurantName} />}
            {...{ lat, lng }}
            yAnchor={1}
          ></CustomOverlay>
        )
    )
  );
};
