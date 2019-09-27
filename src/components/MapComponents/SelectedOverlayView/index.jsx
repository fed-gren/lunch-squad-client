import React, { useContext } from "react";
import { CustomOverlay } from "react-kakao-maps";
import { data, styles } from "../../../../config";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

import RestaurantOverlay from "../RestaurantOverlay";

export default () => {
  const { selectedRestaurant } = useContext(RestaurantContext);

  return (
    selectedRestaurant && (
      <CustomOverlay
        key={selectedRestaurant.id}
        content={
          <RestaurantOverlay
            message={selectedRestaurant.restaurantName}
            bgColor={styles.selectedOverlayColor}
            shadowColor={styles.selectedOverlayShadowColor}
          />
        }
        {...{ lat: selectedRestaurant.lat, lng: selectedRestaurant.lng }}
        yAnchor={data.selectedOverlayYAnchor}
        zIndex={data.selectedOverlayZIndex}
      ></CustomOverlay>
    )
  );
};
