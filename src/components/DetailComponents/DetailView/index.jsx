import React, { useContext, useEffect, useState } from "react";
import InfoLayout from "../../InfoLayout";
import DetailInfoView from "../DetailInfoView";
import ReviewContainerView from "../ReviewContainerView";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

export default function index({ match, history }) {
  const {
    restaurants,
    selectedRestaurant,
    setSelectedRestaurant,
    setHoveredRestaurant
  } = useContext(RestaurantContext);
  const restaurantId = match.params.id;

  useEffect(() => {
    if (!restaurants) return;
    const temp = restaurants.filter(({ id }) => id === restaurantId);

    setSelectedRestaurant(...temp);
    return () => {
      setSelectedRestaurant(null);
      setHoveredRestaurant(null);
    };
  }, [restaurants, match.params.id]);

  const { goBack } = history;
  return (
    <InfoLayout>
      {selectedRestaurant ? (
        <>
          <DetailInfoView {...{ goBack }} restaurantData={selectedRestaurant} />
          <ReviewContainerView />
        </>
      ) : (
        <div />
      )}
    </InfoLayout>
  );
}
