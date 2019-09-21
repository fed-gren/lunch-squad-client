import React from "react";
import Styled from "./styles";

import ThumbnailView from "../../SharedComponents/ThumbnailView";
import RestaurantInfoView from "../RestaurantInfoView";

export default function RestaurantItemView({ ...info }) {
  return (
    <Styled.RestaurantItem>
      <ThumbnailView />
      <RestaurantInfoView {...info} />
    </Styled.RestaurantItem>
  );
}
