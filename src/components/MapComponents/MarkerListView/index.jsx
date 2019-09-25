import React, { useContext } from "react";
import { CustomOverlay } from "react-kakao-maps";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

import RestaurantOverlay from "../RestaurantOverlay";

export default () => {
  const { restaurants } = useContext(RestaurantContext);

  return (
    restaurants &&
    Object.values(restaurants).map(({ id, lat, lng, restaurantName }) => (
      <CustomOverlay
        key={id}
        content={<RestaurantOverlay message={restaurantName} />}
        {...{ lat, lng }}
        yAnchor={1}
      ></CustomOverlay>
    ))
  );
};
