import React, { useContext, useEffect } from "react";
import InfoLayout from "../../InfoLayout";
import DetailInfoView from "../DetailInfoView";
import ReviewContainerView from "../ReviewContainerView";
import { RestaurantContext } from "../../../contexts/RestaurantContext";

export default function index({ match, history }) {
  const { restaurants, selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantContext
  );
  const restaurantId = match.params.id;

  useEffect(() => {
    if (!restaurants) return;
    const temp = restaurants.filter(({ id }) => id === restaurantId);

    setSelectedRestaurant(...temp);
    return () => setSelectedRestaurant(null);
  }, [restaurants]);

  const { goBack } = history;
  return (
    <InfoLayout>
      {selectedRestaurant && (
        <>
          <DetailInfoView {...{ goBack }} restaurantData={selectedRestaurant} />
          <ReviewContainerView />
        </>
      )}
    </InfoLayout>
  );
}
