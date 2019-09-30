import React, { useState, useContext, useEffect } from "react";
import { CustomOverlay } from "react-kakao-maps";
import { data, styles } from "../../../../config";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

import RestaurantOverlay from "../RestaurantOverlay";

export default () => {
  const { hoveredRestaurant } = useContext(RestaurantContext);

  return (
    hoveredRestaurant && (
      <CustomOverlay
        key={hoveredRestaurant.id}
        content={
          <RestaurantOverlay
            message={hoveredRestaurant.restaurantName}
            bgColor={styles.selectedOverlayColor}
            shadowColor={styles.selectedOverlayShadowColor}
          />
        }
        {...{ lat: hoveredRestaurant.lat, lng: hoveredRestaurant.lng }}
        yAnchor={data.selectedOverlayYAnchor}
        zIndex={data.selectedOverlayZIndex}
      ></CustomOverlay>
    )
  );
};
