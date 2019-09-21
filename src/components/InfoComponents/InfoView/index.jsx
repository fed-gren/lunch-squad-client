import React from "react";
import { RestaurantDataProvider } from "../../../contexts/RestaurantDataContext";

import InfoLayout from "../../InfoLayout";
import RestaurantListView from "../RestaurantListView";

export default function styles() {
  return (
    <InfoLayout>
      <RestaurantDataProvider>
        <RestaurantListView />
      </RestaurantDataProvider>
    </InfoLayout>
  );
}
